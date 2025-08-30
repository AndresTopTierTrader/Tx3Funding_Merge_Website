import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { formatPhoneNumber } from '../../utils/form/formHelpers';
import { FORM_FIELDS } from '../../data/constants';
import CountryCodeSelector from './CountryCodeSelector';
import {
  fieldVariants,
  buttonVariants,
  errorVariants,
  stepVariants,
  staggerContainer,
  springConfigs
} from '../../utils/animations';

// Personal information step component
function PersonalInfoStep({
  displayFormData,
  errors,
  onInputChange,
  onPhoneChange,
  onSubmit
}) {
  return (
    <motion.form
      key="step1"
      onSubmit={onSubmit}
      className="space-y-6"
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      custom={1}
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* First Name */}
        <motion.div variants={fieldVariants}>
          <label className="block text-slate-400 mb-2">
            {FORM_FIELDS.firstName.label}
            {FORM_FIELDS.firstName.required && <span className="text-red-400">*</span>}
          </label>
          <motion.input
            type={FORM_FIELDS.firstName.type}
            value={displayFormData.firstName || ''}
            onChange={(e) => onInputChange('firstName', e.target.value)}
            className="w-full bg-[#0B111D] border border-[#717892] rounded-lg px-4 py-3 text-textPrimary focus:border-white focus:outline-none transition-all duration-200"
            placeholder={FORM_FIELDS.firstName.placeholder}
            whileFocus={{ scale: 1.01 }}
            transition={springConfigs.premium}
          />
          <AnimatePresence>
            {errors.firstName && (
              <motion.p
                className="text-red-400 text-sm mt-1"
                variants={errorVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {errors.firstName}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Last Name */}
        <motion.div variants={fieldVariants}>
          <label className="block text-slate-400 mb-2">
            {FORM_FIELDS.lastName.label}
            {FORM_FIELDS.lastName.required && <span className="text-red-400">*</span>}
          </label>
          <motion.input
            type={FORM_FIELDS.lastName.type}
            value={displayFormData.lastName || ''}
            onChange={(e) => onInputChange('lastName', e.target.value)}
            className="w-full bg-[#0B111D] border border-[#717892] rounded-lg px-4 py-3 text-textPrimary focus:border-white focus:outline-none transition-all duration-200"
            placeholder={FORM_FIELDS.lastName.placeholder}
            whileFocus={{ scale: 1.01 }}
            transition={springConfigs.premium}
          />
          <AnimatePresence>
            {errors.lastName && (
              <motion.p
                className="text-red-400 text-sm mt-1"
                variants={errorVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {errors.lastName}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Email */}
        <motion.div variants={fieldVariants}>
          <label className="block text-slate-400 mb-2">
            {FORM_FIELDS.email.label}
            {FORM_FIELDS.email.required && <span className="text-red-400">*</span>}
          </label>
          <motion.input
            type={FORM_FIELDS.email.type}
            value={displayFormData.email || ''}
            onChange={(e) => onInputChange('email', e.target.value)}
            className="w-full bg-[#0B111D] border border-[#717892] rounded-lg px-4 py-3 text-textPrimary focus:border-white focus:outline-none transition-all duration-200"
            placeholder={FORM_FIELDS.email.placeholder}
            whileFocus={{ scale: 1.01 }}
            transition={springConfigs.premium}
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p
                className="text-red-400 text-sm mt-1"
                variants={errorVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {errors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Confirm Email */}
        <motion.div variants={fieldVariants}>
          <label className="block text-slate-400 mb-2">
            {FORM_FIELDS.confirmEmail.label}
            {FORM_FIELDS.confirmEmail.required && <span className="text-red-400">*</span>}
          </label>
          <motion.input
            type={FORM_FIELDS.confirmEmail.type}
            value={displayFormData.confirmEmail || ''}
            onChange={(e) => onInputChange('confirmEmail', e.target.value)}
            className="w-full bg-[#0B111D] border border-[#717892] rounded-lg px-4 py-3 text-textPrimary focus:border-white focus:outline-none transition-all duration-200"
            placeholder={FORM_FIELDS.confirmEmail.placeholder}
            whileFocus={{ scale: 1.01 }}
            transition={springConfigs.premium}
          />
          <AnimatePresence>
            {errors.confirmEmail && (
              <motion.p
                className="text-red-400 text-sm mt-1"
                variants={errorVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {errors.confirmEmail}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Phone Number */}
        <motion.div className="md:col-span-2" variants={fieldVariants}>
          <label className="block text-slate-400 mb-2">
            {FORM_FIELDS.phoneNumber.label}
            {FORM_FIELDS.phoneNumber.required && <span className="text-red-400">*</span>}
          </label>
          <div className="flex w-full">
            <div className="flex-shrink-0">
              <CountryCodeSelector
                value={displayFormData.countryCode || ''}
                onChange={(value) => onInputChange('countryCode', value)}
                error={errors.phoneNumber}
              />
            </div>
            <motion.input
              type={FORM_FIELDS.phoneNumber.type}
              value={formatPhoneNumber(displayFormData.phoneNumber || '')}
              onChange={(e) => onPhoneChange(e.target.value)}
              className="flex-1 min-w-0 bg-[#0B111D] border border-l-0 border-[#717892] rounded-r-lg px-4 py-3 text-textPrimary focus:border-white focus:outline-none transition-all duration-200"
              placeholder={FORM_FIELDS.phoneNumber.placeholder}
              whileFocus={{ scale: 1.01 }}
              transition={springConfigs.premium}
            />
          </div>
          <AnimatePresence>
            {errors.phoneNumber && (
              <motion.p
                className="text-red-400 text-sm mt-1"
                variants={errorVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {errors.phoneNumber}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Next Button */}
      <motion.div className="pt-6" variants={fieldVariants}>
        <motion.button
          type="submit"
          className="w-full bg-green-400 text-black font-medium py-3 px-6 rounded-lg text-lg hover:opacity-90 transition-opacity"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          Next
          <FaArrowRight className="inline ml-2 w-3" />
        </motion.button>
      </motion.div>
    </motion.form>
  );
}

export default PersonalInfoStep;