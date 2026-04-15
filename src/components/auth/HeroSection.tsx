import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="relative flex flex-col w-2/3 bg-gradient-to-br from-foreground to-foreground/90 h-screen justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat"></div>
      </div>

      <div className='absolute flex top-10 left-10 gap-3 items-center z-10'>
        <div className=' backdrop-blur-sm p-2 rounded-xl'>
          <Image
            src="/images/logo/logo_dark.png"
            alt="LongTri Official"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
        </div>
        <div>
          <h1 className='text-background font-bold text-2xl tracking-tight'>LongTri Official</h1>
          <p className='text-background/70 text-xs'>Mua sắm cao cấp</p>
        </div>
      </div>

      {/* Content */}
      <div className='gap-8 flex flex-col justify-center px-16 z-10'>
        <div className='space-y-4'>
          <div className='inline-block px-4 py-1 bg-background/10 backdrop-blur-sm rounded-full text-background/90 text-sm font-medium mb-4'>
            Chính hãng 100%
          </div>
          <h1 className='text-background font-bold text-5xl leading-tight'>
            Chào mừng quý khách đến với
            <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-900'>
              LongTri Official
            </span>
          </h1>
        </div>

        <div className='max-w-xl'>
          <p className='text-muted-foreground  font-medium text-lg leading-relaxed'>
            Hệ thống thương mại điện tử chính hãng, nơi hội tụ của những sản phẩm chất lượng cao
            và dịch vụ khách hàng chuyên nghiệp. Với sứ mệnh mang đến trải nghiệm mua sắm trực tuyến
            an toàn, tiện lợi và đáng tin cậy, LongTri Official tự hào là điểm đến lý tưởng cho khách hàng trên toàn quốc.
          </p>
        </div>

        {/* Trust badges */}
        <div className='flex gap-6 pt-4'>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 bg-green-400 rounded-full'></div>
            <span className='text-background/80 text-sm'>Giao hàng toàn quốc</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 bg-green-400 rounded-full'></div>
            <span className='text-background/80 text-sm'>Đổi trả 15 ngày</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 bg-green-400 rounded-full'></div>
            <span className='text-background/80 text-sm'>Hỗ trợ 24/7</span>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-background/5 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-green-400/10 rounded-full blur-2xl"></div>
    </div>
  )
}
