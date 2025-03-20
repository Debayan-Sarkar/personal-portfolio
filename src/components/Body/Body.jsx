import { motion } from 'framer-motion'
import React from 'react'
import { A11y, Grid, Navigation, Pagination, Scrollbar, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Body = () => {
  return (
    <>

      <motion.section
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          delay: 0.2,
          damping: 20,
        }}
        className="w-full">
        <div className="flex justify-between flex-row-reverse items-center pt-[42px] pb-[42px] pr-[24px] pl-[24px] max-md:!flex-col ">
          <div className="flex w-full">
            <img src="/1.png" alt="" />
          </div>
          <div className="flex flex-col gap-7">
            <h2 className='text-xl font-semibold epilogue'>Branding | Image Making</h2>
            <h1 className="text-6xl font-semibold epilogue">Visual Designer</h1>
            <p className="text-sm epilogue">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed molestiae vero explicabo, expedita aspernatur tenetur asperiores quis necessitatibus cum, rerum quae quod sit? Consequuntur quo officiis vel sequi, mollitia consequatur.</p>
            <button className="bg-[#2D2D2D] cursor-pointer text-white p-4 w-[150px] h-[55px]  flex items-center justify-center">Contact</button>
          </div>
        </div>
      </motion.section>

      <section className="w-full">
        <div className="flex justify-between items-start gap-11 pt-[64px] pb-[64px] pr-[24px] pl-[24px] max-md:justify-center max-md:items-center max-md:flex-col">
          <div className="flex w-full justify-start max-md:justify-center max-md:items-center">
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                delay: 0.3,
                damping: 20,
              }}
              src="/2.png" alt="" className='w-[200px]' />
          </div>
          <div className="flex flex-col gap-10 items-center justify-center">
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                delay: 0.4,
                damping: 10,
              }}
              className='text-xl font-semibold epilogue text-center'>Branding | Image Making</motion.h2>
            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                delay: 0.5,
                damping: 10,
              }}
              className="text-7xl w-full text-center font-semibold epilogue">Visual Designer</motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                delay: 0.6,
                damping: 10,
              }}
              className="text-sm epilogue w-full text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed molestiae vero explicabo, expedita aspernatur tenetur asperiores quis necessitatibus cum, rerum quae quod sit? Consequuntur quo officiis vel sequi, mollitia consequatur.</motion.p>
            <motion.button
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                delay: 0.7,
                damping: 10,
              }}
              className="bg-[#2D2D2D] cursor-pointer text-white p-4 w-[150px] h-[55px]  flex items-center justify-center">Contact</motion.button>
          </div>
          <div className="flex w-full justify-end max-md:justify-center max-md:items-center">
            <motion.img
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                delay: 0.8,
                damping: 10,
              }}
              src="/3.png" alt="" className='w-[200px]' />
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="flex justify-between items-center pt-[42px] pb-[42px] pr-[24px] pl-[24px] ">
          <div className="flex gap-7 max-md:justify-center max-md:flex-col">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                delay: 0.9,
                damping: 20,
              }}
              className="flex justify-center items-center gap-2 flex-col">
              <img src="/4.png" alt="" className='w-30 mb-2.5' />
              <h2 className="text-xl text-black font-semibold">Product Design</h2>
              <p className="text-sm text-center text-gray-500">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                delay: 0.10,
                damping: 20,
              }}
              className="flex justify-center items-center gap-2 flex-col">
              <img src="/5.png" alt="" className='w-30 mb-2.5' />
              <h2 className="text-xl text-black font-semibold">Visual Design</h2>
              <p className="text-sm text-center text-gray-500">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                delay: 0.11,
                damping: 20,
              }}
              className="flex justify-center items-center gap-2 flex-col">
              <img src="/6.png" alt="" className='w-30 mb-2.5' />
              <h2 className="text-xl text-black font-semibold">Art Direction</h2>
              <p className="text-sm text-center text-gray-500">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="w-full grid grid-cols-2 max-md:grid-cols-1 gap-10 pt-[42px] pb-[42px] pr-[24px] pl-[24px] ">

          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              delay: 0.12,
              damping: 20,
            }}
            className="flex justify-center items-center gap-5 w-full">
            <img src="/4.png" alt="" className='w-30 mb-2.5' />
            <div className="flex flex-col items-start justify-center gap-4">
              <h2 className="text-xl text-black font-semibold">Product Design</h2>
              <p className="text-sm text-gray-500">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              delay: 0.13,
              damping: 20,
            }}
            className="flex justify-center items-center gap-5 w-full">
            <img src="/5.png" alt="" className='w-30 mb-2.5' />
            <div className="flex flex-col items-start justify-center gap-4">
              <h2 className="text-xl text-black font-semibold">Visual Design</h2>
              <p className="text-sm text-gray-500">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
            </div>

          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              delay: 0.14,
              damping: 20,
            }}
            className="flex justify-center items-center gap-5 w-full">
            <img src="/8.png" alt="" className='w-30 mb-2.5' />
            <div className="flex flex-col items-start justify-center gap-4">
              <h2 className="text-xl text-black font-semibold">Art Direction</h2>
              <p className="text-sm text-gray-500">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
            </div>
          </motion.div>
          <motion.div

            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              delay: 0.15,
              damping: 20,
            }}
            className="flex justify-center items-center gap-5 w-full">
            <img src="/9.png" alt="" className='w-30 mb-2.5' />
            <div className="flex flex-col items-start justify-center gap-4">
              <h2 className="text-xl text-black font-semibold">Art Direction</h2>
              <p className="text-sm text-gray-500">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            delay: 0.16,
            damping: 20,
          }}
          className="text-center text-4xl font-semibold pt-[42px] pb-[42px] pr-[24px] pl-[24px]">Latest Work</motion.h1>
        <div className="w-full grid grid-cols-3 max-md:grid-cols-1 gap-10 pt-[42px] pb-[42px] pr-[24px] pl-[24px] ">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              delay: 0.17,
              damping: 10,
            }}
            className="flex justify-center items-center gap-5 w-full flex-col">
            <img src="/10.jpeg" alt="" className='w-full' />
            <div className="flex items-start justify-center gap-2 flex-col">
              <h2 className="text-xl text-black font-semibold">Product Design</h2>
              <p className="text-sm text-gray-500">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              delay: 0.18,
              damping: 10,
            }}
            className="flex justify-center items-center gap-5 w-full flex-col">
            <img src="/11.jpeg" alt="" className='w-full' />
            <div className="flex items-start justify-center gap-2 flex-col">
              <h2 className="text-xl text-black font-semibold">Visual Design</h2>
              <p className="text-sm text-gray-500">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
            </div>

          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              delay: 0.19,
              damping: 10,
            }}
            className="flex justify-center items-center gap-5 w-full flex-col">
            <img src="/12.jpeg" alt="" className='w-full' />
            <div className="flex items-start justify-center gap-2 flex-col">
              <h2 className="text-xl text-black font-semibold">Art Direction</h2>
              <p className="text-sm text-gray-500">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              delay: 0.20,
              damping: 10,
            }}
            className="flex justify-center items-center gap-5 w-full flex-col">
            <img src="/13.jpeg" alt="" className='w-full' />
            <div className="flex items-start justify-center gap-2 flex-col">
              <h2 className="text-xl text-black font-semibold">Art Direction</h2>
              <p className="text-sm text-gray-500">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              delay: 0.21,
              damping: 10,
            }}
            className="flex justify-center items-center gap-5 w-full flex-col">
            <img src="/14.jpeg" alt="" className='w-full' />
            <div className="flex items-start justify-center gap-2 flex-col">
              <h2 className="text-xl text-black font-semibold">Art Direction</h2>
              <p className="text-sm text-gray-500">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              delay: 0.22,
              damping: 10,
            }}
            className="flex justify-center items-center gap-5 w-full flex-col">
            <img src="/15.jpeg" alt="" className='w-full' />
            <div className="flex items-start justify-center gap-2 flex-col">
              <h2 className="text-xl text-black font-semibold">Art Direction</h2>
              <p className="text-sm text-gray-500">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className='flex gap-20 items-center justify-center pt-[42px] pb-[42px] pr-[24px] pl-[24px]'>
        <svg width="100" height="39" viewBox="0 0 117 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50.3448 20.4171C50.3448 25.9144 46.0443 29.9652 40.7667 29.9652C35.489 29.9652 31.1885 25.9144 31.1885 20.4171C31.1885 14.8812 35.489 10.8691 40.7667 10.8691C46.0443 10.8691 50.3448 14.8812 50.3448 20.4171ZM46.152 20.4171C46.152 16.9819 43.6595 14.6315 40.7667 14.6315C37.8739 14.6315 35.3814 16.9819 35.3814 20.4171C35.3814 23.8179 37.8739 26.2028 40.7667 26.2028C43.6595 26.2028 46.152 23.8136 46.152 20.4171Z" fill="#2D2D2D" />
          <path d="M71.0078 20.4171C71.0078 25.9144 66.7074 29.9652 61.4297 29.9652C56.152 29.9652 51.8516 25.9144 51.8516 20.4171C51.8516 14.8855 56.152 10.8691 61.4297 10.8691C66.7074 10.8691 71.0078 14.8812 71.0078 20.4171ZM66.815 20.4171C66.815 16.9819 64.3225 14.6315 61.4297 14.6315C58.5369 14.6315 56.0444 16.9819 56.0444 20.4171C56.0444 23.8179 58.5369 26.2028 61.4297 26.2028C64.3225 26.2028 66.815 23.8136 66.815 20.4171Z" fill="#2D2D2D" />
          <path d="M90.8097 11.446V28.5876C90.8097 35.6389 86.6513 38.5188 81.7353 38.5188C77.1076 38.5188 74.3224 35.4236 73.272 32.8924L76.9225 31.3728C77.5725 32.9268 79.1653 34.7607 81.731 34.7607C84.8777 34.7607 86.8278 32.8192 86.8278 29.1645V27.7912H86.6814C85.743 28.9492 83.935 29.9608 81.6535 29.9608C76.8795 29.9608 72.5058 25.8024 72.5058 20.4516C72.5058 15.062 76.8795 10.8691 81.6535 10.8691C83.9307 10.8691 85.7387 11.8808 86.6814 13.0043H86.8278V11.4503H90.8097V11.446ZM87.1248 20.4516C87.1248 17.0896 84.8821 14.6315 82.028 14.6315C79.1352 14.6315 76.7116 17.0896 76.7116 20.4516C76.7116 23.7792 79.1352 26.2028 82.028 26.2028C84.8821 26.2028 87.1248 23.7792 87.1248 20.4516Z" fill="#2D2D2D" />
          <path d="M97.3745 1.39844V29.3795H93.2849V1.39844H97.3745Z" fill="#2D2D2D" />
          <path d="M113.311 23.56L116.565 25.7296C115.515 27.2837 112.984 29.9612 108.61 29.9612C103.186 29.9612 99.1351 25.7684 99.1351 20.4132C99.1351 14.7352 103.22 10.8652 108.141 10.8652C113.096 10.8652 115.519 14.8084 116.311 16.9393L116.746 18.0241L103.982 23.3104C104.96 25.226 106.479 26.2032 108.61 26.2032C110.745 26.2032 112.226 25.1528 113.311 23.56ZM103.294 20.1248L111.826 16.582C111.356 15.3896 109.944 14.5587 108.283 14.5587C106.152 14.5587 103.186 16.4399 103.294 20.1248Z" fill="#2D2D2D" />
          <path d="M15.7085 17.9333V13.8825H29.359C29.4925 14.5885 29.5613 15.4237 29.5613 16.3277C29.5613 19.3668 28.7305 23.1249 26.0529 25.8025C23.4485 28.5145 20.1209 29.9609 15.7128 29.9609C7.54237 29.9609 0.671936 23.3057 0.671936 15.1352C0.671936 6.96476 7.54237 0.30957 15.7128 0.30957C20.2329 0.30957 23.4528 2.08314 25.8721 4.39481L23.0138 7.25318C21.2789 5.62598 18.9285 4.36037 15.7085 4.36037C9.74211 4.36037 5.07573 9.16881 5.07573 15.1352C5.07573 21.1017 9.74211 25.9101 15.7085 25.9101C19.5785 25.9101 21.7826 24.3561 23.1946 22.9441C24.3396 21.799 25.093 20.1632 25.39 17.929L15.7085 17.9333Z" fill="#2D2D2D" />
        </svg>
        <svg width="88" height="31" viewBox="0 0 88 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M85.4608 0.404775C84.7318 0.600709 80.7225 1.67345 76.5513 2.78868C72.3801 3.90398 67.8407 5.11824 66.4637 5.48714C65.0868 5.85603 61.3095 6.86655 58.0697 7.73283C40.4931 12.4325 25.451 16.4572 23.5364 16.9725C20.934 17.6729 19.8712 17.8282 18.1613 17.7577C15.5123 17.6486 13.3531 16.8223 11.8025 15.3243C10.1705 13.7477 9.4242 11.6875 9.53244 9.05754C9.61557 7.03782 10.1657 4.96133 11.2481 2.58236C11.505 2.01783 11.7076 1.54901 11.6984 1.54047C11.6892 1.53185 11.2763 2.01333 10.7809 2.61034C5.02898 9.54167 1.62166 15.6381 0.860677 20.36C0.694932 21.3883 0.71091 23.0666 0.894989 23.97C1.27714 25.8449 2.26807 27.2655 4.09856 28.5622C7.81623 31.1957 12.3707 31.4799 18.5008 29.4609C20.8719 28.68 23.7706 27.4976 34.5444 22.9165C36.0225 22.288 38.6898 21.1547 40.4717 20.3981C42.2536 19.6414 43.9269 18.9291 44.1901 18.8152C44.4534 18.7013 46.7065 17.7391 49.1971 16.6769C55.6242 13.9358 67.7655 8.7449 81.4846 2.87277C84.4814 1.59003 86.996 0.479803 87.0725 0.405656C87.2459 0.237554 87.18 0.0357315 86.9541 0.0431684C86.8617 0.0461873 86.1897 0.208914 85.4608 0.404775Z" fill="#2D2D2D" />
        </svg>

        <svg width="114" height="19" viewBox="0 0 114 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M5.15881 0.728929C3.17078 0.884412 1.74211 1.55585 0.987533 2.68928C0.526377 3.38201 0.32763 4.08655 0.297896 5.13404C0.281036 5.7279 0.310563 6.08921 0.411601 6.52566C0.661968 7.60708 1.38598 8.48892 2.78509 9.41662C3.28416 9.7475 3.63505 9.9541 4.79465 10.5997C6.24707 11.4084 6.68578 11.7006 7.15901 12.1744C7.50572 12.5215 7.65858 12.7663 7.73729 13.1001C7.83081 13.4969 7.77044 14.0497 7.59275 14.4239C7.34565 14.9442 6.88304 15.1887 6.14758 15.1878C5.29794 15.1867 4.73717 14.8107 4.55769 14.1216C4.52166 13.9833 4.51217 13.759 4.51217 13.0462V12.1455H2.34153H0.170898V12.8986C0.170898 13.71 0.201852 14.1428 0.290908 14.5766C0.647635 16.3141 1.87684 17.447 3.89354 17.8969C5.34004 18.2196 7.20635 18.1841 8.56017 17.808C9.40981 17.572 10.0899 17.2046 10.6176 16.6967C11.3053 16.0348 11.6391 15.3172 11.7873 14.1824C11.8595 13.6297 11.8591 12.462 11.7866 11.9968C11.5901 10.736 10.8627 9.78991 9.31002 8.7758C8.79599 8.44007 8.33817 8.1776 7.17343 7.55085C5.7384 6.7787 5.21679 6.43892 4.83797 6.02965C4.53551 5.70284 4.42297 5.40323 4.42297 4.92477C4.42297 4.00623 4.97621 3.46197 5.90851 3.46343C6.54371 3.46441 7.00688 3.69946 7.2417 4.14001C7.40167 4.44015 7.42617 4.59388 7.42617 5.29791V5.93096H9.44814H11.4701L11.4698 5.31397C11.4694 4.11197 11.367 3.5182 11.0514 2.88642C10.4594 1.70146 9.21796 0.99779 7.3202 0.77145C6.85128 0.715519 5.63588 0.691612 5.15881 0.728929ZM57.7671 0.817509C55.5888 0.987086 54.1072 1.75543 53.4165 3.07363C53.2716 3.35022 53.1246 3.74367 53.0566 4.03692C52.8662 4.85837 52.871 5.92671 53.0684 6.67959C53.3337 7.69111 54.1098 8.59427 55.4775 9.48316C55.8863 9.74887 56.316 10.0005 57.2045 10.4944C57.6366 10.7345 58.1923 11.0521 58.4393 11.1999C59.4522 11.8061 60.0284 12.3448 60.2383 12.8819C60.3311 13.1192 60.3513 13.6551 60.2799 13.981C60.1473 14.5861 59.8275 14.9282 59.2538 15.0791C58.9954 15.147 58.4441 15.1478 58.1916 15.0806C57.7663 14.9675 57.4115 14.701 57.2523 14.3751C57.1085 14.0807 57.0843 13.8766 57.0837 12.9558L57.0832 12.1158H54.939H52.7949L52.8101 13.0896C52.8228 13.8963 52.8358 14.1195 52.886 14.3905C53.2084 16.1291 54.344 17.2658 56.2465 17.7539C57.7511 18.14 59.7397 18.1202 61.1735 17.7049C62.0289 17.4572 62.6421 17.113 63.1829 16.5772C64.0344 15.7337 64.3516 14.7595 64.3503 12.993C64.3497 12.2455 64.3172 11.9401 64.1879 11.4647C63.9358 10.5377 63.1084 9.59818 61.7961 8.74892C61.3587 8.46582 60.8393 8.16975 59.7811 7.60018C58.2966 6.80124 57.7891 6.47106 57.4102 6.05751C57.0439 5.65773 56.9195 5.17225 57.039 4.60827C57.1878 3.90576 57.7008 3.52367 58.4956 3.5234C59.0916 3.52322 59.5645 3.7699 59.8 4.20388C59.9502 4.4808 59.9732 4.61565 59.989 5.31397L60.0037 5.9607H61.9927H63.9816V5.27796C63.9816 4.90247 63.9668 4.45755 63.9487 4.28928C63.735 2.30439 62.3726 1.15738 59.8783 0.862082C59.3958 0.804991 58.2411 0.780608 57.7671 0.817509ZM106.606 0.805525C106.229 0.843259 105.607 0.946528 105.29 1.02402C104.343 1.2558 103.635 1.63168 103.05 2.21293C102.373 2.88529 102.041 3.60484 101.86 4.78617C101.809 5.12087 101.786 12.8969 101.834 13.5133C101.878 14.0752 101.931 14.3769 102.056 14.777C102.683 16.7807 104.777 17.8728 107.826 17.7856C110.916 17.6971 112.791 16.4266 113.164 14.1675C113.263 13.5646 113.282 13.0105 113.282 10.6458V8.33948H110.412H107.543V9.52887V10.7183H108.376H109.208L109.208 12.1232C109.207 13.6575 109.195 13.7964 109.04 14.0823C108.772 14.5745 108.286 14.8443 107.617 14.8729C106.724 14.9111 106.088 14.5088 105.886 13.7778C105.837 13.6002 105.833 13.3099 105.833 9.36532C105.833 5.38735 105.836 5.12964 105.887 4.91243C106.075 4.1136 106.637 3.69182 107.513 3.69182C108.048 3.69182 108.414 3.82479 108.721 4.13079C109.081 4.48936 109.148 4.7234 109.17 5.70052L109.186 6.40672H111.219H113.252V5.89067C113.252 4.1035 112.921 3.06896 112.078 2.22878C111.347 1.49906 110.434 1.09407 109.015 0.870378C108.696 0.820067 108.462 0.808083 107.677 0.801542C107.154 0.797201 106.672 0.798984 106.606 0.805525ZM68.1273 1.24307C68.1188 1.26528 68.1168 4.1054 68.1228 7.55448C68.1326 13.1423 68.139 13.86 68.1818 14.1418C68.3477 15.2337 68.67 15.9213 69.3159 16.5616C70.1789 17.417 71.3704 17.8417 73.2065 17.9483C74.4447 18.0201 75.7087 17.875 76.6393 17.5541C78.3558 16.9622 79.2918 15.7283 79.4425 13.8584C79.4626 13.6096 79.4734 11.3201 79.4734 7.33905V1.20314H77.4371H75.4009L75.3929 7.51434L75.3849 13.8255L75.3185 14.021C75.1498 14.5169 74.819 14.8354 74.3132 14.9892C74.0447 15.0708 73.4867 15.0624 73.2303 14.973C72.7738 14.8138 72.4889 14.5383 72.297 14.0707L72.233 13.9147L72.2182 7.56637L72.2033 1.21801L70.173 1.21036C68.4856 1.204 68.1402 1.20953 68.1273 1.24307ZM17.4641 1.31464C17.4126 1.56135 14.503 17.3939 14.503 17.4276C14.503 17.4613 14.8642 17.468 16.6723 17.468H18.8416L18.8584 17.3714C18.893 17.1724 21.0447 2.7858 21.0447 2.75342C21.0447 2.73481 21.0714 2.71961 21.1042 2.71961C21.1369 2.71961 21.1636 2.73638 21.1636 2.75687C21.1636 2.7932 23.2573 17.1796 23.2905 17.3714L23.3072 17.468H25.4771H27.6469L27.6314 17.4011C27.6118 17.3163 24.6723 1.27195 24.6723 1.2495C24.6723 1.24037 23.0543 1.23287 21.0768 1.23287H17.4812L17.4641 1.31464ZM31.2325 1.44833C31.2181 1.63875 30.8835 16.9689 30.8859 17.3268L30.8869 17.468H32.9088H34.9308L34.931 16.2266C34.9316 13.1445 35.0227 2.88348 35.0497 2.85648C35.0655 2.84063 35.0866 2.83572 35.0964 2.8456C35.1063 2.85547 35.7154 6.11945 36.45 10.0989C37.1846 14.0783 37.7925 17.3644 37.8009 17.4011L37.8162 17.468H39.8632H41.9103L41.9411 17.3119C41.958 17.2261 42.564 13.9445 43.2877 10.0195C44.0114 6.0945 44.6149 2.87045 44.6288 2.8549C44.6448 2.83706 44.6636 2.83706 44.6799 2.8549C44.6992 2.87604 44.8085 15.545 44.8036 17.193L44.8027 17.468H46.826H48.8492L48.8314 16.9402C48.8216 16.6499 48.7479 13.2814 48.6678 9.45453C48.5876 5.62767 48.5132 2.21228 48.5026 1.86474L48.4833 1.23287L45.1934 1.2329L41.9036 1.23296L40.9079 7.43622C39.9691 13.2852 39.8912 13.7324 39.8245 13.6582C39.819 13.6521 39.3671 10.8573 38.8203 7.44743L37.8261 1.24774L34.5375 1.24019L31.2488 1.23261L31.2325 1.44833ZM83.9931 9.27612V17.3194H85.9705H87.9478L87.9476 16.9551C87.9475 16.7548 87.9007 13.8478 87.8437 10.4952C87.7867 7.14265 87.74 4.32939 87.7399 4.24352C87.7396 3.99826 87.8102 4.0376 87.8999 4.33272C87.9409 4.46766 88.3503 5.82243 88.8098 7.34336C89.2693 8.86429 90.1353 11.7312 90.7343 13.7142L91.8236 17.3197L94.6953 17.3121L97.567 17.3045L97.5745 9.26869L97.582 1.23287H95.5741H93.5663L93.5833 1.835C93.5927 2.16619 93.6392 4.8055 93.6868 7.70018C93.7343 10.5949 93.7797 13.1941 93.7878 13.4762C93.8012 13.949 93.7983 13.9891 93.7507 13.9891C93.7076 13.9891 93.3954 12.9448 91.8596 7.66301C90.8478 4.18366 90.0139 1.31351 90.0064 1.28491C89.9934 1.23579 89.8247 1.23287 86.9929 1.23287H83.9931V9.27612Z" fill="#2D2D2D" />
        </svg>

        <svg width="39" height="47" viewBox="0 0 39 47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M28.2425 0.0238611C26.2658 0.214361 23.9451 1.3593 22.3169 2.94736C20.575 4.64628 19.3979 7.00795 19.1915 9.21795C19.1598 9.55733 19.1744 10.3649 19.2163 10.5905L19.2446 10.743L19.4407 10.7708C19.727 10.8115 20.4316 10.787 20.7936 10.7239C22.1747 10.4831 23.613 9.80336 24.8986 8.78394C25.2872 8.47571 26.006 7.74832 26.3598 7.30502C26.8748 6.65981 27.3121 5.97031 27.6651 5.2468C28.1793 4.19306 28.4839 3.19622 28.6505 2.02226C28.6986 1.68297 28.7208 0.625799 28.6855 0.35281C28.6367 -0.0241183 28.646 -0.00209532 28.5379 0.00142652C28.4859 0.00311883 28.3529 0.013227 28.2425 0.0238611ZM27.357 11.3344C26.8248 11.3658 26.1029 11.4822 25.4703 11.6385C24.6375 11.8443 24.0126 12.0567 22.543 12.6334C21.3507 13.1013 20.9809 13.2316 20.5013 13.353C19.8928 13.5071 19.359 13.5032 18.701 13.3401C18.2351 13.2246 17.8947 13.1035 16.6702 12.618C15.4918 12.1508 15.0621 11.9952 14.5046 11.8339C13.1468 11.4412 12.0632 11.3539 10.6968 11.5269C9.22355 11.7134 7.79805 12.2017 6.5118 12.9604C4.01113 14.4353 2.14293 16.8175 1.13703 19.8138C0.394078 22.0269 0.133965 24.5356 0.361604 27.2926C0.570056 29.817 1.18718 32.4966 2.14446 35.0338C2.75893 36.6624 3.58992 38.378 4.41525 39.722C5.16981 40.9507 6.69065 43.0136 7.63551 44.09C9.39303 46.0922 11.0231 46.945 12.8444 46.815C13.8033 46.7465 14.4114 46.5756 15.8876 45.9597C16.8398 45.5623 17.2375 45.4137 17.7301 45.2713C19.2194 44.8406 20.9022 44.8028 22.3601 45.1671C22.9702 45.3196 23.3214 45.4466 24.3611 45.8908C25.6508 46.4417 26.1447 46.5974 26.9568 46.7089C27.3174 46.7584 28.0904 46.7776 28.3975 46.7447C29.8167 46.5927 31.1118 45.8881 32.4002 44.5669C33.1865 43.7607 33.9819 42.7472 35.1255 41.0941C36.3864 39.2717 37.5091 37.0471 38.2072 34.9881C38.4194 34.3623 38.4207 34.3564 38.3527 34.3354C38.1225 34.2642 37.2416 33.7807 36.7791 33.4717C34.1361 31.7062 32.5405 29.1609 32.1956 26.1606C31.9087 23.665 32.4592 21.2914 33.7946 19.2656C34.5687 18.0912 35.6873 16.9715 36.8877 16.1691C37.0418 16.0662 37.1678 15.9708 37.1678 15.9573C37.1678 15.9185 36.8539 15.4984 36.5814 15.1723C34.6542 12.867 31.9305 11.5423 28.7063 11.3422C28.3591 11.3206 27.659 11.3166 27.357 11.3344Z" fill="#2D2D2D" />
        </svg>

        <svg width="66" height="45" viewBox="0 0 66 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M34.3862 3.20553C31.7801 4.70215 29.6226 5.93618 29.5917 5.94781C29.5608 5.95944 32.5417 11.1921 36.216 17.5761L42.8964 29.1832H49.3163H55.7361L55.5807 28.9072C55.2205 28.267 39.2666 0.693364 39.1988 0.593732C39.1328 0.496763 38.5892 0.791762 34.3862 3.20553ZM23.3804 13.3119C20.7548 14.8251 18.6146 16.0944 18.6243 16.1326C18.634 16.1708 20.3364 19.1301 22.4073 22.7089L26.1727 29.2157L26.1729 30.5634L26.1732 31.9111H27.5371H28.901V30.5475V29.184L33.9033 29.1674L38.9057 29.1507L33.5401 19.863C30.5891 14.7548 28.17 10.572 28.1644 10.568C28.1587 10.5639 26.0059 11.7987 23.3804 13.3119ZM12.1483 23.1437C9.56062 24.6427 7.42152 25.8915 7.39469 25.9187C7.36787 25.946 7.75945 26.6916 8.26495 27.5757L9.18398 29.1832H15.5747C20.6606 29.1832 21.959 29.1667 21.9341 29.102C21.8574 28.9022 16.9537 20.4489 16.9062 20.4344C16.8769 20.4255 14.7358 21.6446 12.1483 23.1437ZM22.0814 31.4906V33.798L21.6105 33.5404C19.9511 32.6327 17.9592 32.6082 16.2035 33.4738C15.0573 34.0389 14.2297 34.8557 13.6743 35.9704C13.2067 36.9088 13.0877 37.4279 13.0937 38.5034C13.0998 39.5896 13.2256 40.1462 13.6662 41.0364C14.6336 42.9909 16.6461 44.2504 18.8014 44.2504C19.7307 44.2504 20.6394 44.0217 21.5439 43.5601L22.0814 43.2859V43.6387V43.9916H23.4453H24.8092V36.5874V29.1832H23.4453H22.0814V31.4906ZM38.9681 31.4808V33.7784L38.4972 33.5273C36.4922 32.458 34.0119 32.6555 32.2093 34.028C31.1494 34.835 30.3739 36.0603 30.0973 37.3652C29.9902 37.87 29.9781 38.9441 30.0734 39.4819C30.6156 42.543 33.4371 44.6035 36.5229 44.1916C37.1753 44.1045 38.1974 43.7616 38.658 43.4753L38.9681 43.2826V43.637V43.9916H40.3321H41.696V36.5874V29.1832H40.3321H38.9681V31.4808ZM5.34704 32.8846C3.15599 33.194 1.3241 34.7175 0.660578 36.7823C-0.188436 39.4241 1.038 42.3554 3.51606 43.6072C5.20091 44.4583 7.07476 44.4598 8.78305 43.6114L9.4163 43.2969V43.6443V43.9916H10.7478H12.0792V38.4709V32.9503H10.7478H9.4163V33.3671V33.784L8.79967 33.47C8.42933 33.2815 7.95481 33.1025 7.61143 33.0219C6.94739 32.866 5.91983 32.8037 5.34704 32.8846ZM47.5228 32.8868C46.1029 33.1111 44.6883 33.9166 43.8452 34.9804C43.4096 35.5302 43.0397 36.2421 42.8245 36.9446C42.6635 37.4704 42.6457 37.6239 42.6479 38.4709C42.6505 39.5607 42.7676 40.1102 43.1804 40.9715C43.9288 42.533 45.2854 43.6386 47.0218 44.1023C47.6198 44.262 49.096 44.2586 49.7066 44.0961C50.268 43.9467 50.8132 43.7258 51.2371 43.4757L51.5683 43.2805V43.6361V43.9916H52.9322H54.2961V38.4709V32.9503H52.9322H51.5683V33.3804C51.5683 33.7165 51.5505 33.796 51.4871 33.7441C51.2582 33.5571 50.3012 33.1429 49.8206 33.0228C49.1933 32.8661 48.0733 32.7998 47.5228 32.8868ZM59.5245 32.863C57.5481 33.0976 56.2128 34.0167 55.779 35.4409C55.6671 35.8084 55.6487 36.0023 55.6736 36.5595C55.701 37.1768 55.724 37.2749 55.9472 37.7265C56.5395 38.9248 57.3998 39.353 60.1157 39.8013C61.4462 40.021 61.8951 40.1658 62.152 40.4584C62.561 40.9243 62.313 41.6086 61.6029 41.9736C61.3096 42.1244 61.2058 42.1406 60.5312 42.1406C59.947 42.1406 59.7088 42.1126 59.4376 42.012C58.8059 41.7778 58.3804 41.2884 58.2839 40.6852L58.2414 40.4194H56.8208H55.4002V40.6331C55.4002 40.9788 55.5818 41.5767 55.8307 42.0503C56.614 43.5409 58.5071 44.3551 60.8935 44.2275C63.5667 44.0846 65.1335 42.8803 65.3146 40.8292C65.4666 39.1075 64.3313 37.853 62.2091 37.3979C61.8042 37.3111 61.0638 37.1675 60.5637 37.0789C59.4283 36.8779 59.0325 36.7512 58.7414 36.496C58.4523 36.2428 58.3887 35.9303 58.5548 35.5803C58.6445 35.3913 58.7534 35.2969 59.0328 35.1659C59.3669 35.0091 59.4617 34.9962 60.2714 34.9962C61.1103 34.9962 61.1614 35.0039 61.4511 35.1742C61.8128 35.3868 62.02 35.6973 62.0799 36.1167L62.124 36.425L63.5034 36.4426C65.0791 36.4626 64.9506 36.5258 64.7828 35.8141C64.5822 34.9632 63.9014 34.0363 63.1348 33.5707C62.2369 33.0252 60.6983 32.7236 59.5245 32.863ZM26.1732 38.4709V43.9916H27.5371H28.901V38.4709V32.9503H27.5371H26.1732V38.4709ZM7.0176 35.4581C8.26832 35.8291 9.16592 36.8405 9.36161 38.0991C9.51178 39.065 9.17449 40.0048 8.41654 40.7326C6.93778 42.1526 4.62143 41.8758 3.50197 40.1453C3.15884 39.6148 3.02908 39.0792 3.06188 38.3286C3.08539 37.7923 3.11695 37.6597 3.32589 37.2197C3.99883 35.8028 5.60158 35.0379 7.0176 35.4581ZM19.6827 35.457C20.2673 35.6287 20.7613 35.9314 21.1697 36.3678C22.3893 37.6716 22.3521 39.5125 21.0816 40.7326C19.8458 41.9192 17.9841 41.9503 16.731 40.8051C16.1312 40.2568 15.8194 39.6628 15.7163 38.8717C15.5222 37.3821 16.5689 35.8575 18.0613 35.4562C18.5313 35.3298 19.2508 35.3301 19.6827 35.457ZM36.9621 35.5754C38.1685 36.0651 38.9681 37.2451 38.9681 38.5359C38.9681 40.0563 37.8614 41.3351 36.3163 41.6C35.304 41.7736 34.3246 41.449 33.5829 40.6939C32.8881 39.9866 32.6352 39.3231 32.679 38.3224C32.702 37.7958 32.7346 37.6582 32.9366 37.2346C33.3395 36.3902 33.9893 35.8077 34.8748 35.497C35.4654 35.2899 36.3394 35.3227 36.9621 35.5754ZM49.2345 35.4581C49.8129 35.6296 50.2104 35.8666 50.6253 36.2873C51.6404 37.3165 51.8527 38.6974 51.1954 39.9954C50.9527 40.4747 50.2978 41.0969 49.7822 41.3382C47.6814 42.3212 45.2636 40.7748 45.269 38.4515C45.272 37.1265 46.3173 35.8174 47.6713 35.4429C48.086 35.3283 48.8211 35.3354 49.2345 35.4581Z" fill="#2D2D2D" />
        </svg>
      </section>

      <section className="w-full">
        <h1 className="text-center text-4xl font-semibold pt-[42px]  pr-[24px] pl-[24px]">Testimonial</h1>
        <Swiper
          // install Swiper modules
          modules={[ Thumbs, Grid]}
          spaceBetween={50}
          slidesPerView={1}
          grid={{
            rows: 1,
          }}
          
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className="pt-[42px] pb-[42px] pr-[24px] pl-[24px] "
        >
          <SwiperSlide className=" !p-4">
            <div className="flex justify-between gap-7 rounded-2xl shadow-2xl w-full flex-col p-4 bg-[#f0f8ff] ">
              <h2 className="text-md font-semibold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi dolorem eos consequatur voluptatum doloribus veniam itaque similique quaerat sed fugit. Ducimus architecto inventore odit quo, doloribus esse repudiandae quibusdam aliquam.
              </h2>
              <div className="flex items-start justify-start gap-2 ">
                <img src="/16.png" alt="" className='w-14 rounded-full border border-[#f0f8ff]' />

                <div className="flex flex-col gap-2.5">
                  <svg width="124" height="20" viewBox="0 0 124 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.10326 1.81699C9.47008 1.07374 10.5299 1.07374 10.8967 1.81699L12.7063 5.48347C12.8519 5.77862 13.1335 5.98319 13.4592 6.03051L17.5054 6.61846C18.3256 6.73765 18.6531 7.74562 18.0596 8.32416L15.1318 11.1781C14.8961 11.4079 14.7885 11.7389 14.8442 12.0632L15.5353 16.0931C15.6754 16.91 14.818 17.533 14.0844 17.1473L10.4653 15.2446C10.174 15.0915 9.82598 15.0915 9.53466 15.2446L5.91562 17.1473C5.18199 17.533 4.32456 16.91 4.46467 16.0931L5.15585 12.0632C5.21148 11.7389 5.10393 11.4079 4.86825 11.1781L1.94038 8.32416C1.34687 7.74562 1.67438 6.73765 2.4946 6.61846L6.54081 6.03051C6.86652 5.98319 7.14808 5.77862 7.29374 5.48347L9.10326 1.81699Z" fill="#2D2D2D" />
                    <path d="M35.1033 1.81699C35.4701 1.07374 36.5299 1.07374 36.8967 1.81699L38.7063 5.48347C38.8519 5.77862 39.1335 5.98319 39.4592 6.03051L43.5054 6.61846C44.3256 6.73765 44.6531 7.74562 44.0596 8.32416L41.1318 11.1781C40.8961 11.4079 40.7885 11.7389 40.8442 12.0632L41.5353 16.0931C41.6754 16.91 40.818 17.533 40.0844 17.1473L36.4653 15.2446C36.174 15.0915 35.826 15.0915 35.5347 15.2446L31.9156 17.1473C31.182 17.533 30.3246 16.91 30.4647 16.0931L31.1558 12.0632C31.2115 11.7389 31.1039 11.4079 30.8682 11.1781L27.9404 8.32416C27.3469 7.74562 27.6744 6.73765 28.4946 6.61846L32.5408 6.03051C32.8665 5.98319 33.1481 5.77862 33.2937 5.48347L35.1033 1.81699Z" fill="#2D2D2D" />
                    <path d="M61.1033 1.81699C61.4701 1.07374 62.5299 1.07374 62.8967 1.81699L64.7063 5.48347C64.8519 5.77862 65.1335 5.98319 65.4592 6.03051L69.5054 6.61846C70.3256 6.73765 70.6531 7.74562 70.0596 8.32416L67.1318 11.1781C66.8961 11.4079 66.7885 11.7389 66.8442 12.0632L67.5353 16.0931C67.6754 16.91 66.818 17.533 66.0844 17.1473L62.4653 15.2446C62.174 15.0915 61.826 15.0915 61.5347 15.2446L57.9156 17.1473C57.182 17.533 56.3246 16.91 56.4647 16.0931L57.1558 12.0632C57.2115 11.7389 57.1039 11.4079 56.8682 11.1781L53.9404 8.32416C53.3469 7.74562 53.6744 6.73765 54.4946 6.61846L58.5408 6.03051C58.8665 5.98319 59.1481 5.77862 59.2937 5.48347L61.1033 1.81699Z" fill="#2D2D2D" />
                    <path d="M87.1033 1.81699C87.4701 1.07374 88.5299 1.07374 88.8967 1.81699L90.7063 5.48347C90.8519 5.77862 91.1335 5.98319 91.4592 6.03051L95.5054 6.61846C96.3256 6.73765 96.6531 7.74562 96.0596 8.32416L93.1318 11.1781C92.8961 11.4079 92.7885 11.7389 92.8442 12.0632L93.5353 16.0931C93.6754 16.91 92.818 17.533 92.0844 17.1473L88.4653 15.2446C88.174 15.0915 87.826 15.0915 87.5347 15.2446L83.9156 17.1473C83.182 17.533 82.3246 16.91 82.4647 16.0931L83.1558 12.0632C83.2115 11.7389 83.1039 11.4079 82.8682 11.1781L79.9404 8.32416C79.3469 7.74562 79.6744 6.73765 80.4946 6.61846L84.5408 6.03051C84.8665 5.98319 85.1481 5.77862 85.2937 5.48347L87.1033 1.81699Z" fill="#2D2D2D" />
                    <path d="M113.103 1.81699C113.47 1.07374 114.53 1.07374 114.897 1.81699L116.706 5.48347C116.852 5.77862 117.133 5.98319 117.459 6.03051L121.505 6.61846C122.326 6.73765 122.653 7.74562 122.06 8.32416L119.132 11.1781C118.896 11.4079 118.789 11.7389 118.844 12.0632L119.535 16.0931C119.675 16.91 118.818 17.533 118.084 17.1473L114.465 15.2446C114.174 15.0915 113.826 15.0915 113.535 15.2446L109.916 17.1473C109.182 17.533 108.325 16.91 108.465 16.0931L109.156 12.0632C109.211 11.7389 109.104 11.4079 108.868 11.1781L105.94 8.32416C105.347 7.74562 105.674 6.73765 106.495 6.61846L110.541 6.03051C110.867 5.98319 111.148 5.77862 111.294 5.48347L113.103 1.81699Z" fill="#2D2D2D" />
                  </svg>
                  <div>
                    <p className="text-md">Gemma Nolen</p>
                    <p className="text-sm text-gray-500">Google</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" !p-4">
            <div className="flex justify-between gap-7 rounded-2xl shadow-2xl w-full flex-col p-4 bg-[#f0f8ff] ">
              <h2 className="text-md font-semibold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi dolorem eos consequatur voluptatum doloribus veniam itaque similique quaerat sed fugit. Ducimus architecto inventore odit quo, doloribus esse repudiandae quibusdam aliquam.
              </h2>
              <div className="flex items-start justify-start gap-2 ">
                <img src="/16.png" alt="" className='w-14 rounded-full border border-[#f0f8ff]' />

                <div className="flex flex-col gap-2.5">
                  <svg width="124" height="20" viewBox="0 0 124 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.10326 1.81699C9.47008 1.07374 10.5299 1.07374 10.8967 1.81699L12.7063 5.48347C12.8519 5.77862 13.1335 5.98319 13.4592 6.03051L17.5054 6.61846C18.3256 6.73765 18.6531 7.74562 18.0596 8.32416L15.1318 11.1781C14.8961 11.4079 14.7885 11.7389 14.8442 12.0632L15.5353 16.0931C15.6754 16.91 14.818 17.533 14.0844 17.1473L10.4653 15.2446C10.174 15.0915 9.82598 15.0915 9.53466 15.2446L5.91562 17.1473C5.18199 17.533 4.32456 16.91 4.46467 16.0931L5.15585 12.0632C5.21148 11.7389 5.10393 11.4079 4.86825 11.1781L1.94038 8.32416C1.34687 7.74562 1.67438 6.73765 2.4946 6.61846L6.54081 6.03051C6.86652 5.98319 7.14808 5.77862 7.29374 5.48347L9.10326 1.81699Z" fill="#2D2D2D" />
                    <path d="M35.1033 1.81699C35.4701 1.07374 36.5299 1.07374 36.8967 1.81699L38.7063 5.48347C38.8519 5.77862 39.1335 5.98319 39.4592 6.03051L43.5054 6.61846C44.3256 6.73765 44.6531 7.74562 44.0596 8.32416L41.1318 11.1781C40.8961 11.4079 40.7885 11.7389 40.8442 12.0632L41.5353 16.0931C41.6754 16.91 40.818 17.533 40.0844 17.1473L36.4653 15.2446C36.174 15.0915 35.826 15.0915 35.5347 15.2446L31.9156 17.1473C31.182 17.533 30.3246 16.91 30.4647 16.0931L31.1558 12.0632C31.2115 11.7389 31.1039 11.4079 30.8682 11.1781L27.9404 8.32416C27.3469 7.74562 27.6744 6.73765 28.4946 6.61846L32.5408 6.03051C32.8665 5.98319 33.1481 5.77862 33.2937 5.48347L35.1033 1.81699Z" fill="#2D2D2D" />
                    <path d="M61.1033 1.81699C61.4701 1.07374 62.5299 1.07374 62.8967 1.81699L64.7063 5.48347C64.8519 5.77862 65.1335 5.98319 65.4592 6.03051L69.5054 6.61846C70.3256 6.73765 70.6531 7.74562 70.0596 8.32416L67.1318 11.1781C66.8961 11.4079 66.7885 11.7389 66.8442 12.0632L67.5353 16.0931C67.6754 16.91 66.818 17.533 66.0844 17.1473L62.4653 15.2446C62.174 15.0915 61.826 15.0915 61.5347 15.2446L57.9156 17.1473C57.182 17.533 56.3246 16.91 56.4647 16.0931L57.1558 12.0632C57.2115 11.7389 57.1039 11.4079 56.8682 11.1781L53.9404 8.32416C53.3469 7.74562 53.6744 6.73765 54.4946 6.61846L58.5408 6.03051C58.8665 5.98319 59.1481 5.77862 59.2937 5.48347L61.1033 1.81699Z" fill="#2D2D2D" />
                    <path d="M87.1033 1.81699C87.4701 1.07374 88.5299 1.07374 88.8967 1.81699L90.7063 5.48347C90.8519 5.77862 91.1335 5.98319 91.4592 6.03051L95.5054 6.61846C96.3256 6.73765 96.6531 7.74562 96.0596 8.32416L93.1318 11.1781C92.8961 11.4079 92.7885 11.7389 92.8442 12.0632L93.5353 16.0931C93.6754 16.91 92.818 17.533 92.0844 17.1473L88.4653 15.2446C88.174 15.0915 87.826 15.0915 87.5347 15.2446L83.9156 17.1473C83.182 17.533 82.3246 16.91 82.4647 16.0931L83.1558 12.0632C83.2115 11.7389 83.1039 11.4079 82.8682 11.1781L79.9404 8.32416C79.3469 7.74562 79.6744 6.73765 80.4946 6.61846L84.5408 6.03051C84.8665 5.98319 85.1481 5.77862 85.2937 5.48347L87.1033 1.81699Z" fill="#2D2D2D" />
                    <path d="M113.103 1.81699C113.47 1.07374 114.53 1.07374 114.897 1.81699L116.706 5.48347C116.852 5.77862 117.133 5.98319 117.459 6.03051L121.505 6.61846C122.326 6.73765 122.653 7.74562 122.06 8.32416L119.132 11.1781C118.896 11.4079 118.789 11.7389 118.844 12.0632L119.535 16.0931C119.675 16.91 118.818 17.533 118.084 17.1473L114.465 15.2446C114.174 15.0915 113.826 15.0915 113.535 15.2446L109.916 17.1473C109.182 17.533 108.325 16.91 108.465 16.0931L109.156 12.0632C109.211 11.7389 109.104 11.4079 108.868 11.1781L105.94 8.32416C105.347 7.74562 105.674 6.73765 106.495 6.61846L110.541 6.03051C110.867 5.98319 111.148 5.77862 111.294 5.48347L113.103 1.81699Z" fill="#2D2D2D" />
                  </svg>
                  <div>
                    <p className="text-md">Gemma Nolen</p>
                    <p className="text-sm text-gray-500">Google</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" !p-4">
            <div className="flex justify-between gap-7 rounded-2xl shadow-2xl w-full flex-col p-4 bg-[#f0f8ff] ">
              <h2 className="text-md font-semibold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi dolorem eos consequatur voluptatum doloribus veniam itaque similique quaerat sed fugit. Ducimus architecto inventore odit quo, doloribus esse repudiandae quibusdam aliquam.
              </h2>
              <div className="flex items-start justify-start gap-2 ">
                <img src="/16.png" alt="" className='w-14 rounded-full border border-[#f0f8ff]' />

                <div className="flex flex-col gap-2.5">
                  <svg width="124" height="20" viewBox="0 0 124 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.10326 1.81699C9.47008 1.07374 10.5299 1.07374 10.8967 1.81699L12.7063 5.48347C12.8519 5.77862 13.1335 5.98319 13.4592 6.03051L17.5054 6.61846C18.3256 6.73765 18.6531 7.74562 18.0596 8.32416L15.1318 11.1781C14.8961 11.4079 14.7885 11.7389 14.8442 12.0632L15.5353 16.0931C15.6754 16.91 14.818 17.533 14.0844 17.1473L10.4653 15.2446C10.174 15.0915 9.82598 15.0915 9.53466 15.2446L5.91562 17.1473C5.18199 17.533 4.32456 16.91 4.46467 16.0931L5.15585 12.0632C5.21148 11.7389 5.10393 11.4079 4.86825 11.1781L1.94038 8.32416C1.34687 7.74562 1.67438 6.73765 2.4946 6.61846L6.54081 6.03051C6.86652 5.98319 7.14808 5.77862 7.29374 5.48347L9.10326 1.81699Z" fill="#2D2D2D" />
                    <path d="M35.1033 1.81699C35.4701 1.07374 36.5299 1.07374 36.8967 1.81699L38.7063 5.48347C38.8519 5.77862 39.1335 5.98319 39.4592 6.03051L43.5054 6.61846C44.3256 6.73765 44.6531 7.74562 44.0596 8.32416L41.1318 11.1781C40.8961 11.4079 40.7885 11.7389 40.8442 12.0632L41.5353 16.0931C41.6754 16.91 40.818 17.533 40.0844 17.1473L36.4653 15.2446C36.174 15.0915 35.826 15.0915 35.5347 15.2446L31.9156 17.1473C31.182 17.533 30.3246 16.91 30.4647 16.0931L31.1558 12.0632C31.2115 11.7389 31.1039 11.4079 30.8682 11.1781L27.9404 8.32416C27.3469 7.74562 27.6744 6.73765 28.4946 6.61846L32.5408 6.03051C32.8665 5.98319 33.1481 5.77862 33.2937 5.48347L35.1033 1.81699Z" fill="#2D2D2D" />
                    <path d="M61.1033 1.81699C61.4701 1.07374 62.5299 1.07374 62.8967 1.81699L64.7063 5.48347C64.8519 5.77862 65.1335 5.98319 65.4592 6.03051L69.5054 6.61846C70.3256 6.73765 70.6531 7.74562 70.0596 8.32416L67.1318 11.1781C66.8961 11.4079 66.7885 11.7389 66.8442 12.0632L67.5353 16.0931C67.6754 16.91 66.818 17.533 66.0844 17.1473L62.4653 15.2446C62.174 15.0915 61.826 15.0915 61.5347 15.2446L57.9156 17.1473C57.182 17.533 56.3246 16.91 56.4647 16.0931L57.1558 12.0632C57.2115 11.7389 57.1039 11.4079 56.8682 11.1781L53.9404 8.32416C53.3469 7.74562 53.6744 6.73765 54.4946 6.61846L58.5408 6.03051C58.8665 5.98319 59.1481 5.77862 59.2937 5.48347L61.1033 1.81699Z" fill="#2D2D2D" />
                    <path d="M87.1033 1.81699C87.4701 1.07374 88.5299 1.07374 88.8967 1.81699L90.7063 5.48347C90.8519 5.77862 91.1335 5.98319 91.4592 6.03051L95.5054 6.61846C96.3256 6.73765 96.6531 7.74562 96.0596 8.32416L93.1318 11.1781C92.8961 11.4079 92.7885 11.7389 92.8442 12.0632L93.5353 16.0931C93.6754 16.91 92.818 17.533 92.0844 17.1473L88.4653 15.2446C88.174 15.0915 87.826 15.0915 87.5347 15.2446L83.9156 17.1473C83.182 17.533 82.3246 16.91 82.4647 16.0931L83.1558 12.0632C83.2115 11.7389 83.1039 11.4079 82.8682 11.1781L79.9404 8.32416C79.3469 7.74562 79.6744 6.73765 80.4946 6.61846L84.5408 6.03051C84.8665 5.98319 85.1481 5.77862 85.2937 5.48347L87.1033 1.81699Z" fill="#2D2D2D" />
                    <path d="M113.103 1.81699C113.47 1.07374 114.53 1.07374 114.897 1.81699L116.706 5.48347C116.852 5.77862 117.133 5.98319 117.459 6.03051L121.505 6.61846C122.326 6.73765 122.653 7.74562 122.06 8.32416L119.132 11.1781C118.896 11.4079 118.789 11.7389 118.844 12.0632L119.535 16.0931C119.675 16.91 118.818 17.533 118.084 17.1473L114.465 15.2446C114.174 15.0915 113.826 15.0915 113.535 15.2446L109.916 17.1473C109.182 17.533 108.325 16.91 108.465 16.0931L109.156 12.0632C109.211 11.7389 109.104 11.4079 108.868 11.1781L105.94 8.32416C105.347 7.74562 105.674 6.73765 106.495 6.61846L110.541 6.03051C110.867 5.98319 111.148 5.77862 111.294 5.48347L113.103 1.81699Z" fill="#2D2D2D" />
                  </svg>
                  <div>
                    <p className="text-md">Gemma Nolen</p>
                    <p className="text-sm text-gray-500">Google</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" !p-4">
            <div className="flex justify-between gap-7 rounded-2xl shadow-2xl w-full flex-col p-4 bg-[#f0f8ff] ">
              <h2 className="text-md font-semibold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi dolorem eos consequatur voluptatum doloribus veniam itaque similique quaerat sed fugit. Ducimus architecto inventore odit quo, doloribus esse repudiandae quibusdam aliquam.
              </h2>
              <div className="flex items-start justify-start gap-2 ">
                <img src="/16.png" alt="" className='w-14 rounded-full border border-[#f0f8ff]' />

                <div className="flex flex-col gap-2.5">
                  <svg width="124" height="20" viewBox="0 0 124 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.10326 1.81699C9.47008 1.07374 10.5299 1.07374 10.8967 1.81699L12.7063 5.48347C12.8519 5.77862 13.1335 5.98319 13.4592 6.03051L17.5054 6.61846C18.3256 6.73765 18.6531 7.74562 18.0596 8.32416L15.1318 11.1781C14.8961 11.4079 14.7885 11.7389 14.8442 12.0632L15.5353 16.0931C15.6754 16.91 14.818 17.533 14.0844 17.1473L10.4653 15.2446C10.174 15.0915 9.82598 15.0915 9.53466 15.2446L5.91562 17.1473C5.18199 17.533 4.32456 16.91 4.46467 16.0931L5.15585 12.0632C5.21148 11.7389 5.10393 11.4079 4.86825 11.1781L1.94038 8.32416C1.34687 7.74562 1.67438 6.73765 2.4946 6.61846L6.54081 6.03051C6.86652 5.98319 7.14808 5.77862 7.29374 5.48347L9.10326 1.81699Z" fill="#2D2D2D" />
                    <path d="M35.1033 1.81699C35.4701 1.07374 36.5299 1.07374 36.8967 1.81699L38.7063 5.48347C38.8519 5.77862 39.1335 5.98319 39.4592 6.03051L43.5054 6.61846C44.3256 6.73765 44.6531 7.74562 44.0596 8.32416L41.1318 11.1781C40.8961 11.4079 40.7885 11.7389 40.8442 12.0632L41.5353 16.0931C41.6754 16.91 40.818 17.533 40.0844 17.1473L36.4653 15.2446C36.174 15.0915 35.826 15.0915 35.5347 15.2446L31.9156 17.1473C31.182 17.533 30.3246 16.91 30.4647 16.0931L31.1558 12.0632C31.2115 11.7389 31.1039 11.4079 30.8682 11.1781L27.9404 8.32416C27.3469 7.74562 27.6744 6.73765 28.4946 6.61846L32.5408 6.03051C32.8665 5.98319 33.1481 5.77862 33.2937 5.48347L35.1033 1.81699Z" fill="#2D2D2D" />
                    <path d="M61.1033 1.81699C61.4701 1.07374 62.5299 1.07374 62.8967 1.81699L64.7063 5.48347C64.8519 5.77862 65.1335 5.98319 65.4592 6.03051L69.5054 6.61846C70.3256 6.73765 70.6531 7.74562 70.0596 8.32416L67.1318 11.1781C66.8961 11.4079 66.7885 11.7389 66.8442 12.0632L67.5353 16.0931C67.6754 16.91 66.818 17.533 66.0844 17.1473L62.4653 15.2446C62.174 15.0915 61.826 15.0915 61.5347 15.2446L57.9156 17.1473C57.182 17.533 56.3246 16.91 56.4647 16.0931L57.1558 12.0632C57.2115 11.7389 57.1039 11.4079 56.8682 11.1781L53.9404 8.32416C53.3469 7.74562 53.6744 6.73765 54.4946 6.61846L58.5408 6.03051C58.8665 5.98319 59.1481 5.77862 59.2937 5.48347L61.1033 1.81699Z" fill="#2D2D2D" />
                    <path d="M87.1033 1.81699C87.4701 1.07374 88.5299 1.07374 88.8967 1.81699L90.7063 5.48347C90.8519 5.77862 91.1335 5.98319 91.4592 6.03051L95.5054 6.61846C96.3256 6.73765 96.6531 7.74562 96.0596 8.32416L93.1318 11.1781C92.8961 11.4079 92.7885 11.7389 92.8442 12.0632L93.5353 16.0931C93.6754 16.91 92.818 17.533 92.0844 17.1473L88.4653 15.2446C88.174 15.0915 87.826 15.0915 87.5347 15.2446L83.9156 17.1473C83.182 17.533 82.3246 16.91 82.4647 16.0931L83.1558 12.0632C83.2115 11.7389 83.1039 11.4079 82.8682 11.1781L79.9404 8.32416C79.3469 7.74562 79.6744 6.73765 80.4946 6.61846L84.5408 6.03051C84.8665 5.98319 85.1481 5.77862 85.2937 5.48347L87.1033 1.81699Z" fill="#2D2D2D" />
                    <path d="M113.103 1.81699C113.47 1.07374 114.53 1.07374 114.897 1.81699L116.706 5.48347C116.852 5.77862 117.133 5.98319 117.459 6.03051L121.505 6.61846C122.326 6.73765 122.653 7.74562 122.06 8.32416L119.132 11.1781C118.896 11.4079 118.789 11.7389 118.844 12.0632L119.535 16.0931C119.675 16.91 118.818 17.533 118.084 17.1473L114.465 15.2446C114.174 15.0915 113.826 15.0915 113.535 15.2446L109.916 17.1473C109.182 17.533 108.325 16.91 108.465 16.0931L109.156 12.0632C109.211 11.7389 109.104 11.4079 108.868 11.1781L105.94 8.32416C105.347 7.74562 105.674 6.73765 106.495 6.61846L110.541 6.03051C110.867 5.98319 111.148 5.77862 111.294 5.48347L113.103 1.81699Z" fill="#2D2D2D" />
                  </svg>
                  <div>
                    <p className="text-md">Gemma Nolen</p>
                    <p className="text-sm text-gray-500">Google</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" !p-4">
            <div className="flex justify-between gap-7 rounded-2xl shadow-2xl w-full flex-col p-4 bg-[#f0f8ff] ">
              <h2 className="text-md font-semibold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi dolorem eos consequatur voluptatum doloribus veniam itaque similique quaerat sed fugit. Ducimus architecto inventore odit quo, doloribus esse repudiandae quibusdam aliquam.
              </h2>
              <div className="flex items-start justify-start gap-2 ">
                <img src="/16.png" alt="" className='w-14 rounded-full border border-[#f0f8ff]' />

                <div className="flex flex-col gap-2.5">
                  <svg width="124" height="20" viewBox="0 0 124 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.10326 1.81699C9.47008 1.07374 10.5299 1.07374 10.8967 1.81699L12.7063 5.48347C12.8519 5.77862 13.1335 5.98319 13.4592 6.03051L17.5054 6.61846C18.3256 6.73765 18.6531 7.74562 18.0596 8.32416L15.1318 11.1781C14.8961 11.4079 14.7885 11.7389 14.8442 12.0632L15.5353 16.0931C15.6754 16.91 14.818 17.533 14.0844 17.1473L10.4653 15.2446C10.174 15.0915 9.82598 15.0915 9.53466 15.2446L5.91562 17.1473C5.18199 17.533 4.32456 16.91 4.46467 16.0931L5.15585 12.0632C5.21148 11.7389 5.10393 11.4079 4.86825 11.1781L1.94038 8.32416C1.34687 7.74562 1.67438 6.73765 2.4946 6.61846L6.54081 6.03051C6.86652 5.98319 7.14808 5.77862 7.29374 5.48347L9.10326 1.81699Z" fill="#2D2D2D" />
                    <path d="M35.1033 1.81699C35.4701 1.07374 36.5299 1.07374 36.8967 1.81699L38.7063 5.48347C38.8519 5.77862 39.1335 5.98319 39.4592 6.03051L43.5054 6.61846C44.3256 6.73765 44.6531 7.74562 44.0596 8.32416L41.1318 11.1781C40.8961 11.4079 40.7885 11.7389 40.8442 12.0632L41.5353 16.0931C41.6754 16.91 40.818 17.533 40.0844 17.1473L36.4653 15.2446C36.174 15.0915 35.826 15.0915 35.5347 15.2446L31.9156 17.1473C31.182 17.533 30.3246 16.91 30.4647 16.0931L31.1558 12.0632C31.2115 11.7389 31.1039 11.4079 30.8682 11.1781L27.9404 8.32416C27.3469 7.74562 27.6744 6.73765 28.4946 6.61846L32.5408 6.03051C32.8665 5.98319 33.1481 5.77862 33.2937 5.48347L35.1033 1.81699Z" fill="#2D2D2D" />
                    <path d="M61.1033 1.81699C61.4701 1.07374 62.5299 1.07374 62.8967 1.81699L64.7063 5.48347C64.8519 5.77862 65.1335 5.98319 65.4592 6.03051L69.5054 6.61846C70.3256 6.73765 70.6531 7.74562 70.0596 8.32416L67.1318 11.1781C66.8961 11.4079 66.7885 11.7389 66.8442 12.0632L67.5353 16.0931C67.6754 16.91 66.818 17.533 66.0844 17.1473L62.4653 15.2446C62.174 15.0915 61.826 15.0915 61.5347 15.2446L57.9156 17.1473C57.182 17.533 56.3246 16.91 56.4647 16.0931L57.1558 12.0632C57.2115 11.7389 57.1039 11.4079 56.8682 11.1781L53.9404 8.32416C53.3469 7.74562 53.6744 6.73765 54.4946 6.61846L58.5408 6.03051C58.8665 5.98319 59.1481 5.77862 59.2937 5.48347L61.1033 1.81699Z" fill="#2D2D2D" />
                    <path d="M87.1033 1.81699C87.4701 1.07374 88.5299 1.07374 88.8967 1.81699L90.7063 5.48347C90.8519 5.77862 91.1335 5.98319 91.4592 6.03051L95.5054 6.61846C96.3256 6.73765 96.6531 7.74562 96.0596 8.32416L93.1318 11.1781C92.8961 11.4079 92.7885 11.7389 92.8442 12.0632L93.5353 16.0931C93.6754 16.91 92.818 17.533 92.0844 17.1473L88.4653 15.2446C88.174 15.0915 87.826 15.0915 87.5347 15.2446L83.9156 17.1473C83.182 17.533 82.3246 16.91 82.4647 16.0931L83.1558 12.0632C83.2115 11.7389 83.1039 11.4079 82.8682 11.1781L79.9404 8.32416C79.3469 7.74562 79.6744 6.73765 80.4946 6.61846L84.5408 6.03051C84.8665 5.98319 85.1481 5.77862 85.2937 5.48347L87.1033 1.81699Z" fill="#2D2D2D" />
                    <path d="M113.103 1.81699C113.47 1.07374 114.53 1.07374 114.897 1.81699L116.706 5.48347C116.852 5.77862 117.133 5.98319 117.459 6.03051L121.505 6.61846C122.326 6.73765 122.653 7.74562 122.06 8.32416L119.132 11.1781C118.896 11.4079 118.789 11.7389 118.844 12.0632L119.535 16.0931C119.675 16.91 118.818 17.533 118.084 17.1473L114.465 15.2446C114.174 15.0915 113.826 15.0915 113.535 15.2446L109.916 17.1473C109.182 17.533 108.325 16.91 108.465 16.0931L109.156 12.0632C109.211 11.7389 109.104 11.4079 108.868 11.1781L105.94 8.32416C105.347 7.74562 105.674 6.73765 106.495 6.61846L110.541 6.03051C110.867 5.98319 111.148 5.77862 111.294 5.48347L113.103 1.81699Z" fill="#2D2D2D" />
                  </svg>
                  <div>
                    <p className="text-md">Gemma Nolen</p>
                    <p className="text-sm text-gray-500">Google</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" !p-4">
            <div className="flex justify-between gap-7 rounded-2xl shadow-2xl w-full flex-col p-4 bg-[#f0f8ff] ">
              <h2 className="text-md font-semibold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi dolorem eos consequatur voluptatum doloribus veniam itaque similique quaerat sed fugit. Ducimus architecto inventore odit quo, doloribus esse repudiandae quibusdam aliquam.
              </h2>
              <div className="flex items-start justify-start gap-2 ">
                <img src="/16.png" alt="" className='w-14 rounded-full border border-[#f0f8ff]' />

                <div className="flex flex-col gap-2.5">
                  <svg width="124" height="20" viewBox="0 0 124 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.10326 1.81699C9.47008 1.07374 10.5299 1.07374 10.8967 1.81699L12.7063 5.48347C12.8519 5.77862 13.1335 5.98319 13.4592 6.03051L17.5054 6.61846C18.3256 6.73765 18.6531 7.74562 18.0596 8.32416L15.1318 11.1781C14.8961 11.4079 14.7885 11.7389 14.8442 12.0632L15.5353 16.0931C15.6754 16.91 14.818 17.533 14.0844 17.1473L10.4653 15.2446C10.174 15.0915 9.82598 15.0915 9.53466 15.2446L5.91562 17.1473C5.18199 17.533 4.32456 16.91 4.46467 16.0931L5.15585 12.0632C5.21148 11.7389 5.10393 11.4079 4.86825 11.1781L1.94038 8.32416C1.34687 7.74562 1.67438 6.73765 2.4946 6.61846L6.54081 6.03051C6.86652 5.98319 7.14808 5.77862 7.29374 5.48347L9.10326 1.81699Z" fill="#2D2D2D" />
                    <path d="M35.1033 1.81699C35.4701 1.07374 36.5299 1.07374 36.8967 1.81699L38.7063 5.48347C38.8519 5.77862 39.1335 5.98319 39.4592 6.03051L43.5054 6.61846C44.3256 6.73765 44.6531 7.74562 44.0596 8.32416L41.1318 11.1781C40.8961 11.4079 40.7885 11.7389 40.8442 12.0632L41.5353 16.0931C41.6754 16.91 40.818 17.533 40.0844 17.1473L36.4653 15.2446C36.174 15.0915 35.826 15.0915 35.5347 15.2446L31.9156 17.1473C31.182 17.533 30.3246 16.91 30.4647 16.0931L31.1558 12.0632C31.2115 11.7389 31.1039 11.4079 30.8682 11.1781L27.9404 8.32416C27.3469 7.74562 27.6744 6.73765 28.4946 6.61846L32.5408 6.03051C32.8665 5.98319 33.1481 5.77862 33.2937 5.48347L35.1033 1.81699Z" fill="#2D2D2D" />
                    <path d="M61.1033 1.81699C61.4701 1.07374 62.5299 1.07374 62.8967 1.81699L64.7063 5.48347C64.8519 5.77862 65.1335 5.98319 65.4592 6.03051L69.5054 6.61846C70.3256 6.73765 70.6531 7.74562 70.0596 8.32416L67.1318 11.1781C66.8961 11.4079 66.7885 11.7389 66.8442 12.0632L67.5353 16.0931C67.6754 16.91 66.818 17.533 66.0844 17.1473L62.4653 15.2446C62.174 15.0915 61.826 15.0915 61.5347 15.2446L57.9156 17.1473C57.182 17.533 56.3246 16.91 56.4647 16.0931L57.1558 12.0632C57.2115 11.7389 57.1039 11.4079 56.8682 11.1781L53.9404 8.32416C53.3469 7.74562 53.6744 6.73765 54.4946 6.61846L58.5408 6.03051C58.8665 5.98319 59.1481 5.77862 59.2937 5.48347L61.1033 1.81699Z" fill="#2D2D2D" />
                    <path d="M87.1033 1.81699C87.4701 1.07374 88.5299 1.07374 88.8967 1.81699L90.7063 5.48347C90.8519 5.77862 91.1335 5.98319 91.4592 6.03051L95.5054 6.61846C96.3256 6.73765 96.6531 7.74562 96.0596 8.32416L93.1318 11.1781C92.8961 11.4079 92.7885 11.7389 92.8442 12.0632L93.5353 16.0931C93.6754 16.91 92.818 17.533 92.0844 17.1473L88.4653 15.2446C88.174 15.0915 87.826 15.0915 87.5347 15.2446L83.9156 17.1473C83.182 17.533 82.3246 16.91 82.4647 16.0931L83.1558 12.0632C83.2115 11.7389 83.1039 11.4079 82.8682 11.1781L79.9404 8.32416C79.3469 7.74562 79.6744 6.73765 80.4946 6.61846L84.5408 6.03051C84.8665 5.98319 85.1481 5.77862 85.2937 5.48347L87.1033 1.81699Z" fill="#2D2D2D" />
                    <path d="M113.103 1.81699C113.47 1.07374 114.53 1.07374 114.897 1.81699L116.706 5.48347C116.852 5.77862 117.133 5.98319 117.459 6.03051L121.505 6.61846C122.326 6.73765 122.653 7.74562 122.06 8.32416L119.132 11.1781C118.896 11.4079 118.789 11.7389 118.844 12.0632L119.535 16.0931C119.675 16.91 118.818 17.533 118.084 17.1473L114.465 15.2446C114.174 15.0915 113.826 15.0915 113.535 15.2446L109.916 17.1473C109.182 17.533 108.325 16.91 108.465 16.0931L109.156 12.0632C109.211 11.7389 109.104 11.4079 108.868 11.1781L105.94 8.32416C105.347 7.74562 105.674 6.73765 106.495 6.61846L110.541 6.03051C110.867 5.98319 111.148 5.77862 111.294 5.48347L113.103 1.81699Z" fill="#2D2D2D" />
                  </svg>
                  <div>
                    <p className="text-md">Gemma Nolen</p>
                    <p className="text-sm text-gray-500">Google</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>


        </Swiper>

      </section>


      <section className="w-full">
        <div className="flex justify-between w-full items-center pt-[42px] pb-[42px] pr-[24px] pl-[24px] gap-5 max-md:flex-col">
          <div className="flex flex-col w-[50%] max-md:w-full">
            <h1 className="text-start text-4xl font-semibold pb-[24px]">Lets Work Together</h1>
            <p className="mb-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vel, omnis labore, et quia molestiae laborum in tempora dolorem provident optio voluptatem enim repudiandae, temporibus obcaecati exercitationem harum ex! Sequi.
            </p>
            <div className="flex items-center justify-start gap-5">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.3895 16.4565C13.5765 16.4565 12.936 17.169 12.936 18.039C12.936 18.906 13.5915 19.6215 14.3895 19.6215C15.201 19.6215 15.8415 18.906 15.8415 18.039C15.858 17.1675 15.201 16.4565 14.3895 16.4565ZM19.5915 16.4565C18.7785 16.4565 18.138 17.169 18.138 18.039C18.138 18.906 18.7935 19.6215 19.5915 19.6215C20.403 19.6215 21.0435 18.906 21.0435 18.039C21.042 17.1675 20.403 16.4565 19.5915 16.4565Z" fill="black" />
                <path d="M26.517 4.5H7.42051C7.036 4.50098 6.65545 4.57769 6.30058 4.72575C5.94572 4.8738 5.62349 5.09031 5.35229 5.36289C5.0811 5.63548 4.86625 5.95881 4.72002 6.31443C4.57378 6.67005 4.49902 7.05099 4.50001 7.4355V26.7015C4.50001 28.326 5.81101 29.637 7.42051 29.637H23.58L22.8225 26.9985L24.648 28.695L26.3715 30.291L29.4375 33V7.4355C29.4385 7.05099 29.3637 6.67005 29.2175 6.31443C29.0713 5.95881 28.8564 5.63548 28.5852 5.36289C28.314 5.09031 27.9918 4.8738 27.6369 4.72575C27.2821 4.57769 26.9015 4.50098 26.517 4.5ZM21.015 23.1105C21.015 23.1105 20.502 22.4985 20.076 21.954C21.942 21.426 22.6545 20.259 22.6545 20.259C22.0695 20.643 21.5145 20.916 21.015 21.102C19.1965 21.8631 17.194 22.0707 15.258 21.699C14.5427 21.5585 13.8417 21.3526 13.164 21.084C12.8066 20.9482 12.4592 20.7873 12.1245 20.6025C12.081 20.571 12.039 20.559 11.997 20.5305C11.9745 20.5198 11.9546 20.5045 11.9385 20.4855C11.682 20.3445 11.5395 20.2455 11.5395 20.2455C11.5395 20.2455 12.2235 21.3855 14.034 21.927C13.6065 22.467 13.0785 23.1105 13.0785 23.1105C9.93001 23.01 8.73451 20.9445 8.73451 20.9445C8.73451 16.356 10.7865 12.6375 10.7865 12.6375C12.8385 11.097 14.79 11.1405 14.79 11.1405L14.9325 11.3115C12.3675 12.054 11.184 13.179 11.184 13.179C11.184 13.179 11.499 13.008 12.0255 12.7665C13.5495 12.0975 14.76 11.9115 15.2595 11.868C15.345 11.8545 15.417 11.8395 15.5025 11.8395C17.9733 11.5065 20.4857 11.9761 22.6695 13.179C22.6695 13.179 21.543 12.111 19.1205 11.37L19.32 11.142C19.32 11.142 21.273 11.0985 23.3235 12.639C23.3235 12.639 25.3755 16.3575 25.3755 20.946C25.3755 20.946 24.165 23.01 21.015 23.1105Z" fill="black" />
              </svg>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 4.5H6C5.60218 4.5 5.22064 4.65804 4.93934 4.93934C4.65804 5.22064 4.5 5.60218 4.5 6V30C4.5 30.3978 4.65804 30.7794 4.93934 31.0607C5.22064 31.342 5.60218 31.5 6 31.5H18.9225V21.06H15.4155V16.9725H18.9225V13.9725C18.9225 10.485 21.0525 8.5845 24.1725 8.5845C25.221 8.5815 26.271 8.6355 27.315 8.745V12.375H25.1625C23.4705 12.375 23.1405 13.182 23.1405 14.3625V16.965H27.186L26.661 21.0525H23.139V31.5H30C30.3978 31.5 30.7794 31.342 31.0607 31.0607C31.342 30.7794 31.5 30.3978 31.5 30V6C31.5 5.60218 31.342 5.22064 31.0607 4.93934C30.7794 4.65804 30.3978 4.5 30 4.5Z" fill="black" />
              </svg>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.99 10.47C29.6811 8.20159 27.7973 6.31831 25.5285 5.01C23.229 3.6705 20.7195 3 18 3C15.2805 3 12.771 3.6705 10.47 5.01C8.1705 6.3495 6.3495 8.1705 5.01 10.47C3.6705 12.7695 3 15.2805 3 18C3 20.7195 3.669 23.2305 5.01 25.53C6.31848 27.7988 8.20238 29.6821 10.4715 30.99C12.771 32.3295 15.2805 33 18 33C20.7195 33 23.229 32.3295 25.53 30.99C27.7988 29.6817 29.6826 27.7984 30.9915 25.53C32.331 23.2305 33 20.7195 33 18C33 15.2805 32.331 12.7695 30.99 10.47ZM18 5.49C21 5.49 23.658 6.45 25.98 8.3685C24.6 10.1295 22.551 11.5785 19.83 12.7185C18.327 9.999 16.698 7.728 14.9385 5.9085C15.9357 5.63277 16.9654 5.49202 18 5.49ZM8.265 10.2C9.36186 8.80714 10.7497 7.67066 12.3315 6.87C14.1495 8.6715 15.819 10.92 17.3415 13.62C14.3415 14.52 11.1705 14.97 7.83 14.97C6.9705 14.97 6.321 14.9505 5.88 14.91C6.33971 13.1916 7.15192 11.5876 8.265 10.2ZM5.49 18C5.49 17.919 5.4945 17.82 5.505 17.7C5.5155 17.58 5.52 17.481 5.52 17.4C5.901 17.421 6.4815 17.43 7.2615 17.43C11.2605 17.43 14.9805 16.8795 18.42 15.78C18.7005 16.3395 18.9915 16.9695 19.29 17.67C17.31 18.1095 15.279 19.179 13.1985 20.88C11.118 22.581 9.6 24.3705 8.64 26.25C6.54 23.8695 5.49 21.12 5.49 18ZM18 30.51C15.159 30.51 12.609 29.6295 10.3485 27.8715C11.25 26.091 12.6345 24.3885 14.505 22.77C16.374 21.15 18.2295 20.1405 20.07 19.74C21.231 22.9485 22.0162 26.2807 22.41 29.67C21.0043 30.2193 19.5092 30.5041 18 30.51ZM28.62 24.57C27.6382 26.1518 26.3161 27.4949 24.75 28.5015C24.39 25.3815 23.7 22.341 22.6815 19.38C24.0795 19.281 25.329 19.23 26.4315 19.23C27.63 19.23 28.9605 19.281 30.42 19.38C30.2242 21.2248 29.6084 23.0001 28.62 24.57ZM26.76 17.07C25.02 17.07 23.4105 17.1405 21.93 17.28C21.6164 16.4592 21.2762 15.6487 20.91 14.85C24.009 13.491 26.208 11.841 27.5085 9.9C29.3085 12.021 30.2895 14.4405 30.4485 17.16C29.2305 17.1 28.0005 17.07 26.76 17.07Z" fill="black" />
              </svg>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.9985 11.0658C16.1589 11.0658 14.3948 11.7966 13.094 13.0973C11.7932 14.3981 11.0625 16.1623 11.0625 18.0018C11.0625 19.8414 11.7932 21.6056 13.094 22.9063C14.3948 24.2071 16.1589 24.9378 17.9985 24.9378C19.838 24.9378 21.6022 24.2071 22.903 22.9063C24.2037 21.6056 24.9345 19.8414 24.9345 18.0018C24.9345 16.1623 24.2037 14.3981 22.903 13.0973C21.6022 11.7966 19.838 11.0658 17.9985 11.0658ZM17.9985 22.5063C16.8034 22.5063 15.6573 22.0316 14.8123 21.1865C13.9672 20.3415 13.4925 19.1954 13.4925 18.0003C13.4925 16.8052 13.9672 15.6591 14.8123 14.8141C15.6573 13.969 16.8034 13.4943 17.9985 13.4943C19.1936 13.4943 20.3397 13.969 21.1847 14.8141C22.0298 15.6591 22.5045 16.8052 22.5045 18.0003C22.5045 19.1954 22.0298 20.3415 21.1847 21.1865C20.3397 22.0316 19.1936 22.5063 17.9985 22.5063Z" fill="black" />
                <path d="M25.209 12.4278C26.102 12.4278 26.826 11.7039 26.826 10.8108C26.826 9.91777 26.102 9.19381 25.209 9.19381C24.3159 9.19381 23.592 9.91777 23.592 10.8108C23.592 11.7039 24.3159 12.4278 25.209 12.4278Z" fill="black" />
                <path d="M30.7995 9.16681C30.4522 8.27008 29.9216 7.45574 29.2415 6.7759C28.5614 6.09607 27.7469 5.56572 26.85 5.21881C25.8005 4.82485 24.6918 4.61182 23.571 4.58881C22.1265 4.52581 21.669 4.50781 18.006 4.50781C14.343 4.50781 13.8735 4.50781 12.441 4.58881C11.3211 4.61065 10.2131 4.82371 9.16499 5.21881C8.2679 5.56531 7.45314 6.09552 6.77299 6.77541C6.09285 7.45529 5.56233 8.26985 5.21549 9.16681C4.82145 10.2162 4.60891 11.3251 4.58699 12.4458C4.52249 13.8888 4.50299 14.3463 4.50299 18.0108C4.50299 21.6738 4.50299 22.1403 4.58699 23.5758C4.60949 24.6978 4.82099 25.8048 5.21549 26.8563C5.56331 27.753 6.09433 28.5672 6.77464 29.247C7.45495 29.9268 8.26959 30.4572 9.16649 30.8043C10.2126 31.2141 11.321 31.4424 12.444 31.4793C13.8885 31.5423 14.346 31.5618 18.009 31.5618C21.672 31.5618 22.1415 31.5618 23.574 31.4793C24.6946 31.4565 25.8033 31.244 26.853 30.8508C27.7496 30.5031 28.5639 29.9723 29.2439 29.2923C29.924 28.6123 30.4548 27.7979 30.8025 26.9013C31.197 25.8513 31.4085 24.7443 31.431 23.6223C31.4955 22.1793 31.515 21.7218 31.515 18.0573C31.515 14.3928 31.515 13.9278 31.431 12.4923C31.4135 11.3557 31.1999 10.2307 30.7995 9.16681ZM28.9725 23.4648C28.9628 24.3293 28.805 25.1857 28.506 25.9968C28.2807 26.5801 27.9359 27.1098 27.4936 27.5518C27.0513 27.9938 26.5214 28.3384 25.938 28.5633C25.1358 28.861 24.2885 29.0188 23.433 29.0298C22.008 29.0958 21.606 29.1123 17.952 29.1123C14.295 29.1123 13.9215 29.1123 12.4695 29.0298C11.6144 29.0193 10.7675 28.8615 9.96599 28.5633C9.38052 28.3398 8.84849 27.9959 8.40433 27.5538C7.96016 27.1117 7.61374 26.5812 7.38749 25.9968C7.09266 25.1944 6.93496 24.3481 6.92099 23.4933C6.85649 22.0683 6.84149 21.6663 6.84149 18.0123C6.84149 14.3568 6.84149 13.9833 6.92099 12.5298C6.93069 11.6658 7.08847 10.8099 7.38749 9.99931C7.84499 8.81581 8.78249 7.88431 9.96599 7.43131C10.7679 7.13452 11.6145 6.97676 12.4695 6.96481C13.896 6.90031 14.2965 6.88231 17.952 6.88231C21.6075 6.88231 21.9825 6.88231 23.433 6.96481C24.2886 6.97511 25.136 7.13292 25.938 7.43131C26.5214 7.65672 27.0512 8.00162 27.4934 8.44386C27.9357 8.8861 28.2806 9.41592 28.506 9.99931C28.8008 10.8017 28.9585 11.6481 28.9725 12.5028C29.037 13.9293 29.0535 14.3298 29.0535 17.9853C29.0535 21.6393 29.0535 22.0323 28.989 23.4663H28.9725V23.4648Z" fill="black" />
              </svg>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.7045 8.59668C12.588 8.59668 13.383 8.67318 14.112 8.82918C14.8365 8.98368 15.4545 9.23868 15.9765 9.59118C16.491 9.94368 16.893 10.4117 17.1825 10.9997C17.463 11.5802 17.6025 12.3062 17.6025 13.1642C17.6025 14.0942 17.3925 14.8712 16.971 15.4907C16.5465 16.1117 15.921 16.6202 15.087 17.0132C16.2225 17.3417 17.064 17.9162 17.622 18.7322C18.183 19.5557 18.4575 20.5412 18.4575 21.6962C18.4575 22.6337 18.279 23.4392 17.9205 24.1157C17.575 24.7821 17.0738 25.3553 16.4595 25.7867C15.8232 26.2298 15.1124 26.555 14.361 26.7467C13.5732 26.9535 12.762 27.0573 11.9475 27.0557H3V8.59668H11.7045ZM11.178 16.0547C11.898 16.0547 12.495 15.8837 12.966 15.5372C13.434 15.1952 13.6605 14.6312 13.6605 13.8587C13.6605 13.4297 13.584 13.0757 13.434 12.7982C13.2879 12.5312 13.0716 12.3092 12.8085 12.1562C12.5331 11.9929 12.2292 11.8834 11.913 11.8337C11.5683 11.7694 11.2181 11.7387 10.8675 11.7422H7.065V16.0547H11.178ZM11.4045 23.9132C11.805 23.9132 12.186 23.8787 12.5445 23.7977C12.906 23.7197 13.227 23.5937 13.5 23.4062C13.773 23.2262 13.998 22.9817 14.16 22.6697C14.3235 22.3607 14.403 21.9572 14.403 21.4727C14.403 20.5217 14.1345 19.8452 13.6035 19.4357C13.071 19.0307 12.357 18.8297 11.4825 18.8297H7.065V23.9147H11.4045V23.9132ZM24.252 23.8517C24.8025 24.3887 25.596 24.6587 26.628 24.6587C27.3675 24.6587 28.0065 24.4712 28.545 24.0992C29.076 23.7257 29.4 23.3267 29.5245 22.9142H32.757C32.238 24.5222 31.4505 25.6712 30.3735 26.3627C29.31 27.0572 28.0155 27.4022 26.5035 27.4022C25.4505 27.4022 24.5025 27.2327 23.6535 26.8967C22.8386 26.5793 22.1022 26.0891 21.495 25.4597C20.8978 24.8156 20.4362 24.0581 20.1375 23.2322C19.8092 22.3188 19.6466 21.3542 19.6575 20.3837C19.6575 19.3847 19.824 18.4502 20.151 17.5877C20.4614 16.754 20.9381 15.992 21.552 15.3482C22.1595 14.7182 22.8795 14.2217 23.718 13.8572C24.5997 13.4863 25.5485 13.3015 26.505 13.3142C27.636 13.3142 28.6245 13.5332 29.4735 13.9742C30.2968 14.3951 31.0107 15.0022 31.5585 15.7472C32.103 16.4867 32.4915 17.3342 32.733 18.2837C32.9745 19.2317 33.0585 20.2217 32.9895 21.2582H23.343C23.3445 22.3142 23.7 23.3147 24.252 23.8517ZM28.47 16.8302C28.0335 16.3472 27.2955 16.0862 26.3925 16.0862C25.806 16.0862 25.3215 16.1837 24.9315 16.3847C24.5749 16.5648 24.2585 16.8153 24.0015 17.1212C23.7758 17.3989 23.6084 17.7193 23.5095 18.0632C23.423 18.35 23.3672 18.6451 23.343 18.9437H29.316C29.229 18.0077 28.908 17.3162 28.47 16.8302ZM22.593 9.83568H30.0765V11.6582H22.593V9.83568Z" fill="black" />
              </svg>

            </div>
          </div>
          <div className="flex flex-col w-[50%] gap-3 items-start justify-start  max-md:w-full">
            <input type="text" placeholder='Name' className='p-4 bg-[#f0f8ff] outline-0 w-full' />
            <input type="email" placeholder='Email' className='p-4 bg-[#f0f8ff] outline-0 w-full ' />
            <button className="bg-[#2D2D2D] cursor-pointer text-white p-4 w-[150px] h-[55px]  flex items-center justify-center">Submit</button>
          </div>
        </div>

      </section>

    </>
  )
}

export default Body