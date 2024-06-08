<template>
    
<section class="bg-white text-yellow-500 divide-slate-50" data-aos="fade-up" id="masnory" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div class="mx-auto max-w-lg text-center py-8">
          <h2 class="text-3xl font-bold sm:text-4xl text-yellow-500">{{ $t("ourprojects") }}</h2>
    
          <p class="mt-4 text-stone-500">
            {{ $t("ourprojects-para") }}
          </p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid gap-4">
            <div>
                
                <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Low Voltage Electrical Panel
                    </span>
                </div>
               </div>

            </div>

            <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Travel Item
                    </span>
                </div>
               </div>


            <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Travel Item
                    </span>
                </div>
               </div>

        </div>

        <div class="grid gap-4">


            <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Travel Item
                    </span>
                </div>
               </div>



            <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Travel Item
                    </span>
                </div>
               </div>

            <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Travel Item
                    </span>
                </div>
               </div>

        </div>

        <div class="grid gap-4">

            <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Travel Item
                    </span>
                </div>
               </div>

            <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Travel Item
                    </span>
                </div>
               </div>

            <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Travel Item
                    </span>
                </div>
               </div>
        </div>

        <div class="grid gap-4">

            <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Travel Item
                    </span>
                </div>
               </div>

               <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Travel Item
                    </span>
                </div>
               </div>

               <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Travel Item
                    </span>
                </div>
               </div>
        </div>
    </div>
    </div>

</section>
</template>

<style>
.capMasory {
    padding: 5px;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(178deg, transparent, #78716C);
    font-weight: 500;
    transition: 0.5s all ease-in-out;
    transform: translateY(200%);
    
}
.masnoryTitle {
    background: #fff;
    height: 50px;
    width: 100%;
    padding: 12px 0;
    border-radius: 0;
    position: absolute;
    bottom: 0;
}

.masnoryItem:hover{
border-radius: 10px;
/* border: 1px dotted #ddd;  */
}

.masnoryItem:hover .capMasory{
    transform: translateY(0);
    border: 1px  solid #ddd;
}
.cta {
    position: absolute;
    transform: translate(-50%, -50%);
    text-decoration: none;
    text-transform: uppercase;
    background: #eee;
    color: #FFF;
    height: 2.75rem;
    width: 10em;
    line-height: 2.75rem;
    padding: 0px 10px;
    letter-spacing: 1px;
    text-align: center;
    font-size: 16px;
    transition: 0.5s all;
    overflow: hidden;
    top: 0;
    right: 0;
}

.cta:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 0;
    /*    background: #F00;*/
    z-index: -1;
    transition: 1s;
    border-style: solid;
    border-color: #0C4A6E;
    border-width: 80px 100px;
    transform: rotate(360deg);
    transform-origin: top left
}

.cta:hover:before {
    border-color: #FDBA74;
    transform: rotate(40deg)
}

.cta:hover {
    color: #fff;
    transition: 0.5s;
    transition-delay: 0.3s;
}
</style>
