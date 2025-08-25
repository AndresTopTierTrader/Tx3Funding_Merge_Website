import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { FORM_FIELDS, COUNTRIES } from '../../data/constants';
import {
  fieldVariants,
  buttonVariants,
  loadingButtonVariants,
  errorVariants,
  stepVariants,
  staggerContainer,
  springConfigs
} from '../../utils/animations';

// Billing address step component
function BillingAddressStep({ 
  displayFormData, 
  errors, 
  onInputChange, 
  onSubmit, 
  onPrevious,
  isSubmitting 
}) {
  return (
    <motion.form
      key="step2"
      onSubmit={onSubmit}
      className="space-y-8"
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      custom={2}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className='space-y-6'
      >
        {/* Street Address 1 */}
        <motion.div variants={fieldVariants}>
          <label className="block text-slate-400 mb-2">
            {FORM_FIELDS.streetAddress.label}
            {FORM_FIELDS.streetAddress.required && <span className="text-red-400">*</span>}
          </label>
          <motion.input
            type={FORM_FIELDS.streetAddress.type}
            value={displayFormData.streetAddress || ''}
            onChange={(e) => onInputChange('streetAddress', e.target.value)}
            className="w-full bg-[#0B111D] border border-[#717892] rounded-lg px-4 py-3 text-white focus:border-white focus:outline-none transition-all duration-200"
            placeholder={FORM_FIELDS.streetAddress.placeholder}
            whileFocus={{ scale: 1.01 }}
            transition={springConfigs.gentle}
          />
          <AnimatePresence>
            {errors.streetAddress && (
              <motion.p
                className="text-red-400 text-sm mt-1"
                variants={errorVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {errors.streetAddress}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Street Address 2 */}
        <motion.div variants={fieldVariants}>
          <label className="block text-slate-400 mb-2">
            {FORM_FIELDS.streetAddress2.label}
          </label>
          <motion.input
            type={FORM_FIELDS.streetAddress2.type}
            value={displayFormData.streetAddress2 || ''}
            onChange={(e) => onInputChange('streetAddress2', e.target.value)}
            className="w-full bg-[#0B111D] border border-[#717892] rounded-lg px-4 py-3 text-white focus:border-white focus:outline-none transition-all duration-200"
            placeholder={FORM_FIELDS.streetAddress2.placeholder}
            whileFocus={{ scale: 1.01 }}
            transition={springConfigs.gentle}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* City */}
          <motion.div variants={fieldVariants}>
            <label className="block text-slate-400 mb-2">
              {FORM_FIELDS.city.label}
              {FORM_FIELDS.city.required && <span className="text-red-400">*</span>}
            </label>
            <motion.input
              type={FORM_FIELDS.city.type}
              value={displayFormData.city || ''}
              onChange={(e) => onInputChange('city', e.target.value)}
              className="w-full bg-[#0B111D] border border-[#717892] rounded-lg px-4 py-3 text-white focus:border-white focus:outline-none transition-all duration-200"
              placeholder={FORM_FIELDS.city.placeholder}
              whileFocus={{ scale: 1.01 }}
              transition={springConfigs.premium}
            />
            <AnimatePresence>
              {errors.city && (
                <motion.p
                  className="text-red-400 text-sm mt-1"
                  variants={errorVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {errors.city}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* State/Province */}
          <motion.div variants={fieldVariants}>
            <label className="block text-slate-400 mb-2">
              {FORM_FIELDS.stateProvince.label}
              {FORM_FIELDS.stateProvince.required && <span className="text-red-400">*</span>}
            </label>
            <motion.input
              type={FORM_FIELDS.stateProvince.type}
              value={displayFormData.stateProvince || ''}
              onChange={(e) => onInputChange('stateProvince', e.target.value)}
              className="w-full bg-[#0B111D] border border-[#717892] rounded-lg px-4 py-3 text-white focus:border-white focus:outline-none transition-all duration-200"
              placeholder={FORM_FIELDS.stateProvince.placeholder}
              whileFocus={{ scale: 1.01 }}
              transition={springConfigs.premium}
            />
            <AnimatePresence>
              {errors.stateProvince && (
                <motion.p
                  className="text-red-400 text-sm mt-1"
                  variants={errorVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {errors.stateProvince}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Postal Code */}
          <motion.div variants={fieldVariants}>
            <label className="block text-slate-400 mb-2">
              {FORM_FIELDS.postalCode.label}
              {FORM_FIELDS.postalCode.required && <span className="text-red-400">*</span>}
            </label>
            <motion.input
              type={FORM_FIELDS.postalCode.type}
              value={displayFormData.postalCode || ''}
              onChange={(e) => onInputChange('postalCode', e.target.value)}
              className="w-full bg-[#0B111D] border border-[#717892] rounded-lg px-4 py-3 text-white focus:border-white focus:outline-none transition-all duration-200"
              placeholder={FORM_FIELDS.postalCode.placeholder}
              whileFocus={{ scale: 1.01 }}
              transition={springConfigs.premium}
            />
            <AnimatePresence>
              {errors.postalCode && (
                <motion.p
                  className="text-red-400 text-sm mt-1"
                  variants={errorVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {errors.postalCode}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Country */}
          <motion.div variants={fieldVariants}>
            <label className="block text-slate-400 mb-2">
              {FORM_FIELDS.country.label}
              {FORM_FIELDS.country.required && <span className="text-red-400">*</span>}
            </label>
            <motion.select
              value={displayFormData.country || ''}
              onChange={(e) => onInputChange('country', e.target.value)}
              className="w-full bg-[#0B111D] border border-[#717892] rounded-lg px-4 py-3 text-white focus:border-white focus:outline-none transition-all duration-200"
              whileFocus={{ scale: 1.01 }}
              transition={springConfigs.premium}
            >
              <option value="">{FORM_FIELDS.country.placeholder}</option>
              {COUNTRIES.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </motion.select>
            <AnimatePresence>
              {errors.country && (
                <motion.p
                  className="text-red-400 text-sm mt-1"
                  variants={errorVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {errors.country}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>

      {/* Form Navigation */}
      <motion.div className="pt-6 flex flex-col md:flex-row gap-4" variants={fieldVariants}>
        <motion.button
          type="button"
          onClick={onPrevious}
          className="flex w-full md:max-w-[240px] font-light flex-row items-center justify-center bg-transparent text-white border border-slate-400 py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <FaArrowRight className="inline mr-2 w-3 transform rotate-180" />
          <p>Personal Information</p>
        </motion.button>
        
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full bg-green-400 text-black font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          variants={isSubmitting ? loadingButtonVariants : buttonVariants}
          initial="initial"
          animate={isSubmitting ? "loading" : "initial"}
          whileHover={!isSubmitting ? "hover" : {}}
          whileTap={!isSubmitting ? "tap" : {}}
        >
          {isSubmitting ? (
            <div className="flex w-full items-center justify-center">
              <motion.div
                className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              Processing...
            </div>
          ) : (
            <div className='flex text-lg flex-row w-full justify-center items-center'>
              Complete
              <FaArrowRight className='inline ml-2 w-3' />
            </div>
          )}
        </motion.button>
      </motion.div>
    </motion.form>
  );
}

export default BillingAddressStep;