'use client'

import React, { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { FiUpload, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { FaArrowRight } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion';
import { FaCircleCheck } from "react-icons/fa6";
import Link from 'next/link';
import { ENVIRONMENT_URL } from '@/constants/global';


// Form Input Component
const FormInput = ({ label, name, value, onChange, error, type = 'text' }) => (
    <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">
            {label}
        </label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className={`w-full px-3 py-2 bg-black/20 border outline-none rounded-md shadow-sm focus:ring-2 focus:border-blue-500 focus:ring-blue-500 ${error ? 'border-red-500' : 'border-gray-600'
                }`}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
);

// Terms Checkbox Component
const TermsCheckbox = ({ checked, onChange, error, translations }) => (
    <div>
        <div className="flex items-center space-x-2">
            <input
                type="checkbox"
                name="acceptedTerms"
                checked={checked}
                onChange={onChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label className="text-sm text-slate-300">
                {translations.form.form_clicking} <span className='underline' >   {translations.form.form_terms} </span>
            </label>
        </div>
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
);

// Video Upload Section Component
const VideoUploadSection = ({ selectedVideo, onVideoSelect, error, translations }) => (
    <div className="mt-8">
        <div className={`border-2 border-dashed rounded-lg p-6 text-center ${selectedVideo ? 'border-green-500 bg-green-50/10' : 'border-slate-300 hover:border-[#45D1FF]'
            }`}>
            <input
                type="file"
                accept="video/*"
                onChange={onVideoSelect}
                className="hidden"
                id="video-upload"
            />
            <label htmlFor="video-upload" className="cursor-pointer">
                <div className="space-y-2 text-slate-300">
                    {!selectedVideo && <FiUpload className="mx-auto h-12 w-12 text-slate-300" />}
                    <div className="text-sm">
                        {selectedVideo ? (
                            <span className="text-green-600">{translations.form.form_selected} {selectedVideo.name}</span>
                        ) : (
                            `${translations.form.form_max_upload}`
                        )}
                    </div>
                </div>
            </label>
        </div>
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
);

// Progress Bar Component
const ProgressBar = ({ progress, translations }) => (
    <div className="mt-4">
        <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
                <div className="text-sm font-semibold text-slate-300">
                    {translations.form.form_few}
                </div>
                <div className="text-sm text-slate-300">
                    {Math.round(progress)}%
                </div>
            </div>
            <div className="overflow-hidden h-2 bg-gray-200 rounded">
                <div
                    className="h-full bg-gradient-to-r from-[#4A7CBF] to-[#5DAFDC] rounded transition-all duration-300"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    </div>
);

// Status Message Component
const StatusMessage = ({ status, translations, locale }) => {
    if (!status) return null;

    const statusConfig = {
        success: {
            Icon: FaCircleCheck,
            bgColor: 'bg-green-100',
            textColor: 'text-green-700 mt-2 text-xl font-bold',
            iconColor: 'text-green-500',
            message: translations.form.form_success_title,
            description: translations.form.form_succes_desc
        },
        error: {
            Icon: FiAlertCircle,
            bgColor: 'bg-red-100',
            textColor: 'text-red-700 mt-2 text-xl font-bold',
            iconColor: 'text-red-500',
            message: translations.form.form_error_title,
            description: translations.form.form_error_desc
        }
    };

    const config = statusConfig[status];
    if (!config) return null;

    const { Icon, bgColor, textColor, iconColor, message, description } = config;

    return (
        <div className={`mt-4 p-8 ${bgColor} rounded-md flex flex-col items-center`}>
            <div className='flex flex-col items-center'>
                <Icon className={`h-8 w-8 ${iconColor} mr-2`} />
                <span className={textColor}>{message}</span>
            </div>

            <p className='text-center text-black/80 mt-5'>{description} </p>

            <Link href={`${ENVIRONMENT_URL}`}>
                <button className='py-2.5 text-white mt-7 px-4 rounded-xl bg-[#0B111D]'> {translations.form.form_home}</button>
            </Link>

        </div>
    );
};

// Submit Button Component
const SubmitButton = ({ isSubmitting, disabled, translations }) => (
    <button
        type="submit"
        disabled={isSubmitting || disabled}
        className={`w-full flex flex-row items-center justify-center py-2.5 px-4 rounded-md text-white font-medium ${isSubmitting || disabled
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-[#45D1FF] to-[#167BCC]'
            }`}
    >
        {isSubmitting ? `Loading...` : `${translations.form.form_cta}`}
        {isSubmitting == false && <FaArrowRight className='ml-2 w-3 h-3' />}
    </button>
);

// UUID Generator Utility
const generateUUID = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
};


// Main form component
const VideoUploadForm = ({ app, translations, locale }) => {

    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        accountNumber: '',
        payoutAmount: '',
        story: '',
        payoutUsage: '',
        additionalInfo: '',
        acceptedTerms: false
    });

    const [selectedVideo, setSelectedVideo] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [uploadStatus, setUploadStatus] = useState('');

    const formVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const inputVariants = {
        hidden: {
            opacity: 0,
            x: -20,
            y: 10
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 0.5
            }
        }
    };

    const buttonVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.3
            }
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2
            }
        },
        tap: { scale: 0.95 }
    };

    const errorVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3
            }
        },
        exit: {
            opacity: 0,
            y: -10,
            transition: {
                duration: 0.2
            }
        }
    };

    const validateFormData = (data) => {
        const errors = {};

        if (!data.name.trim()) errors.name = 'First name is required';
        if (!data.lastname.trim()) errors.lastname = 'Last name is required';
        if (!data.email.trim()) errors.email = 'Email is required';
        if (!/^\S+@\S+\.\S+$/.test(data.email)) errors.email = 'Invalid email format';
        if (!data.phone.trim()) errors.phone = 'Phone number is required';
        if (!/^\+?[\d\s-]{10,}$/.test(data.phone)) errors.phone = 'Invalid phone number format';
        if (!data.accountNumber.trim()) errors.accountNumber = 'TopTier Account Number is required';
        if (!data.payoutAmount.trim()) errors.payoutAmount = 'Payout amount is required';
        if (!data.story.trim()) errors.story = 'Please share your story';
        if (!data.payoutUsage.trim()) errors.payoutUsage = 'Please share how you used the payout';
        if (!data.acceptedTerms) errors.terms = 'You must accept the terms';

        return errors;
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleVideoSelect = (e) => {
        const file = e.target.files[0];

        if (file) {
            const video = document.createElement('video');
            video.preload = 'metadata';

            video.onloadedmetadata = function () {
                window.URL.revokeObjectURL(video.src);
                if (video.duration > 90) {
                    setErrors(prev => ({
                        ...prev,
                        video: 'Video must be shorter than 1 minute'
                    }));
                    setSelectedVideo(null);
                } else {
                    setSelectedVideo(file);
                    setErrors(prev => {
                        const newErrors = { ...prev };
                        delete newErrors.video;
                        return newErrors;
                    });
                }
            };

            video.src = URL.createObjectURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formErrors = validateFormData(formData);
        setErrors(formErrors);
    
        if (Object.keys(formErrors).length > 0 || !selectedVideo || !selectedImage) {
            return;
        }
    
        setIsSubmitting(true);
        const storage = getStorage(app);
        const uuid = generateUUID();  // Generate UUID here
    
        try {
            // Upload video
            const videoStorageRef = ref(storage, `videos/${uuid}-${selectedVideo.name}`);
            const videoUploadTask = uploadBytesResumable(videoStorageRef, selectedVideo);
    
            // Upload image
            const imageStorageRef = ref(storage, `images/${uuid}-${selectedImage.name}`);
            const imageUploadTask = uploadBytesResumable(imageStorageRef, selectedImage);
    
            let videoUrl = '';
            let imageUrl = '';
    
            // Handle video upload progress
            videoUploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setUploadProgress(progress);                },
                (error) => {
                    setUploadStatus('error');
                    setIsSubmitting(false);
                },
                async () => {
                    try {
                        videoUrl = await getDownloadURL(videoUploadTask.snapshot.ref);
                        if (imageUrl) {
                            await saveFormData(videoUrl, imageUrl, uuid);  // Pass uuid here
                        }
                    } catch (error) {
                        console.error('Video URL error:', error);
                        setUploadStatus('error');
                        setIsSubmitting(false);
                    }
                }
            );
    
            // Handle image upload progress
            imageUploadTask.on('state_changed',
                (snapshot) => {
                    console.log('Step 2: Image Uploading');
                },
                (error) => {
                    console.error('Image upload error:', error);
                    setUploadStatus('error');
                    setIsSubmitting(false);
                },
                async () => {
                    try {
                        imageUrl = await getDownloadURL(imageUploadTask.snapshot.ref);
                        if (videoUrl) {
                            await saveFormData(videoUrl, imageUrl, uuid);  // Pass uuid here
                        }
                    } catch (error) {
                        console.error('Image URL error:', error);
                        setUploadStatus('error');
                        setIsSubmitting(false);
                    }
                }
            );
    
        } catch (error) {
            console.error('Submission error:', error);
            setUploadStatus('error');
            setIsSubmitting(false);
        }
    };
    
    // Update saveFormData to accept uuid parameter
    const saveFormData = async (videoUrl, imageUrl, uuid) => {
        try {
            const userData = {
                id: uuid,  // Use the passed uuid
                name: formData.name,
                lastname: formData.lastname,
                email: formData.email,
                phone: formData.phone,
                accountNumber: formData.accountNumber,
                payoutAmount: formData.payoutAmount,
                story: formData.story,
                payoutUsage: formData.payoutUsage,
                additionalInfo: formData.additionalInfo,
                date: new Date().toLocaleString('en-US', {
                    timeZone: 'America/New_York',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: true
                }),
                videoUrl: videoUrl,
                imageUrl: imageUrl
            };
    
            const db = getFirestore(app);
            await addDoc(collection(db, 'users'), userData);
    
            setUploadStatus('success');
            setFormData({
                name: '',
                lastname: '',
                email: '',
                phone: '',
                accountNumber: '',
                payoutAmount: '',
                story: '',
                payoutUsage: '',
                additionalInfo: '',
                acceptedTerms: false
            });
            setSelectedVideo(null);
            setSelectedImage(null);
            setUploadProgress(0);
    
        } catch (error) {
            console.error('Database error:', error);
            setUploadStatus('error');
        }
        setIsSubmitting(false);
    };


    // Add state for image
    const [selectedImage, setSelectedImage] = useState(null);

    // Add image select handler
    const handleImageSelect = (event) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedImage(event.target.files[0]);
        }
    };

    // Add ImageUploadSection component
    const ImageUploadSection = ({ selectedImage, onImageSelect, error, translations, locale }) => {
        return (
            <div className="space-y-2">
                <label className="block text-sm font-medium">
                    {locale === 'en' ? 'Upload your Payout Certificate' : 'Sube tu Certificado de Payout'}
             
                </label>
                {!selectedImage && (
                    <input
                        type="file"
                        accept="image/*"
                        onChange={onImageSelect}
                        className="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-primary
                            hover:file:bg-violet-100"
                    />
                )}
                {selectedImage && (
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-green-400">
                            {translations.form.selected_image || 'Selected image'}: 
                            <span className='text-slate-300 font-bold'> {selectedImage.name} </span>
                        </p>
                        <button
                            type="button"
                            onClick={() => onImageSelect({ target: { files: null } })}
                            className="text-sm text-red-400 hover:text-red-300"
                        >
                            Remove
                        </button>
                    </div>
                )}
            </div>
        );
    };

    return (
        <motion.div
            className="mx-auto p-6 max-w-[500px] text-slate-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
                variants={formVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="space-y-4" variants={formVariants}>
                    {/* Existing name, lastname, and email fields */}
                    <motion.div variants={inputVariants}>
                        <FormInput
                            label={translations.form.form_first}
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            error={errors.name}
                        />
                        <AnimatePresence>
                            {errors.name && (
                                <motion.span
                                    className="text-red-500 text-sm"
                                    variants={errorVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    {errors.name}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    <motion.div variants={inputVariants}>
                        <FormInput
                            label={translations.form.form_last}
                            name="lastname"
                            value={formData.lastname}
                            onChange={handleInputChange}
                            error={errors.lastname}
                        />
                        <AnimatePresence>
                            {errors.lastname && (
                                <motion.span
                                    className="text-red-500 text-sm"
                                    variants={errorVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    {errors.lastname}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    <motion.div variants={inputVariants}>
                        <FormInput
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            error={errors.email}
                        />
                        <AnimatePresence>
                            {errors.email && (
                                <motion.span
                                    className="text-red-500 text-sm"
                                    variants={errorVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    {errors.email}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* New form fields */}
                    <motion.div variants={inputVariants}>
                        <FormInput
                            label={translations.form.form_phone}
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            error={errors.phone}
                            placeholder="e.g., +1 234 567 8900"
                        />
                        <AnimatePresence>
                            {errors.phone && (
                                <motion.span
                                    className="text-red-500 text-sm"
                                    variants={errorVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    {errors.phone}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    <motion.div variants={inputVariants}>
                        <FormInput
                            label={translations.form.form_account}
                            name="accountNumber"
                            value={formData.accountNumber}
                            onChange={handleInputChange}
                            error={errors.accountNumber}
                        />
                        <AnimatePresence>
                            {errors.accountNumber && (
                                <motion.span
                                    className="text-red-500 text-sm"
                                    variants={errorVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    {errors.accountNumber}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    <motion.div variants={inputVariants}>
                        <FormInput
                            label={translations.form.form_payout_amount}
                            name="payoutAmount"
                            type="text"
                            value={formData.payoutAmount}
                            onChange={handleInputChange}
                            error={errors.payoutAmount}
                            placeholder="e.g., $1,000"
                        />
                        <AnimatePresence>
                            {errors.payoutAmount && (
                                <motion.span
                                    className="text-red-500 text-sm"
                                    variants={errorVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    {errors.payoutAmount}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    <motion.div variants={inputVariants}>
                        <FormInput
                            label={translations.form.form_story}
                            name="story"
                            type="textarea"
                            value={formData.story}
                            onChange={handleInputChange}
                            error={errors.story}
                            rows={4}
                        />
                        <AnimatePresence>
                            {errors.story && (
                                <motion.span
                                    className="text-red-500 text-sm"
                                    variants={errorVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    {errors.story}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    <motion.div variants={inputVariants}>
                        <FormInput
                            label={translations.form.form_payout}
                            name="payoutUsage"
                            type="textarea"
                            value={formData.payoutUsage}
                            onChange={handleInputChange}
                            error={errors.payoutUsage}
                            rows={4}
                        />
                        <AnimatePresence>
                            {errors.payoutUsage && (
                                <motion.span
                                    className="text-red-500 text-sm"
                                    variants={errorVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    {errors.payoutUsage}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.div>

        
                </motion.div>

                <motion.div variants={inputVariants}>
                    <VideoUploadSection
                        selectedVideo={selectedVideo}
                        onVideoSelect={handleVideoSelect}
                        error={errors.video}
                        translations={translations}
                    />
                    <AnimatePresence>
                        {errors.video && (
                            <motion.span
                                className="text-red-500 text-sm"
                                variants={errorVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                {errors.video}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Add Image Upload Section before or after Video Upload Section */}
                <motion.div variants={inputVariants}>
                    <ImageUploadSection
                        selectedImage={selectedImage}
                        onImageSelect={handleImageSelect}
                        error={errors.image}
                        translations={translations}
                        locale={locale}
                    />
                    <AnimatePresence>
                        {errors.image && (
                            <motion.span
                                className="text-red-500 text-sm"
                                variants={errorVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                {errors.image}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </motion.div>

                <AnimatePresence>
                    {isSubmitting && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ProgressBar progress={uploadProgress} translations={translations} />
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {uploadStatus && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <StatusMessage status={uploadStatus} translations={translations} locale={locale} />
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div variants={inputVariants}>
                        <TermsCheckbox
                            translations={translations}
                            checked={formData.acceptedTerms}
                            onChange={handleInputChange}
                            error={errors.terms}
                        />
                        <AnimatePresence>
                            {errors.terms && (
                                <motion.span
                                    className="text-red-500 text-sm"
                                    variants={errorVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    {errors.terms}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.div>
                    
                <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                >
                    <SubmitButton
                        isSubmitting={isSubmitting}
                        disabled={!selectedVideo}
                        translations={translations}
                    />
                </motion.div>
            </motion.form>
        </motion.div>
    );
};

export default VideoUploadForm;