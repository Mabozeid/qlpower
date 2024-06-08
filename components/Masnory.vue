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
                <img class="h-auto max-w-full rounded-lg" src="/public/AdobeStock_372514102.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Low Voltage Electrical Panel
                    </span>
                </div>
               </div>

            </div>

            <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="/public/renovation-profile-concentrated-man-touching-screwdriver-lamp-kitchen-range-hood.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Fixing Light
                    </span>
                </div>
               </div>


            <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="/public/Business-Line-FLS-2-1-1024x786.png" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Air Compressors
                    </span>
                </div>
               </div>

        </div>

        <div class="grid gap-4">


            <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="/public/service-mm.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Light current
                    </span>
                </div>
               </div>

               

            <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="/public/mechanic-repairing-bicycle.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Checking Air commpressors
                    </span>
                </div>
               </div>

            <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="/public/AdobeStock_541806587.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Setup Electrical Panel
                    </span>
                </div>
               </div>

        </div>

        <div class="grid gap-4">

            <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="/public/AdobeStock_409470718.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Current Soluations
                    </span>
                </div>
               </div>

            <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="/public/transformers.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Transformers
                    </span>
                </div>
               </div>

            <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="/public/bernd-dittrich-JKTTnxWhNeg-unsplash.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Generators
                    </span>
                </div>
               </div>
        </div>

        <div class="grid gap-4">

            <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="/public/steel-pipelines-cables-plant.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Pump Checking
                    </span>
                </div>
               </div>
               <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="/public/voltage-switchboard-with-circuit-breakers-are-positions-big-electric-box-electrical-distribution-panel-temporary-electric-cables-are-switched.jpg" alt="">
                <div class="capMasory flex justify-center">c
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Assemply Process
                    </span>
                </div>
               </div>

               <div class="relative overflow-hidden masnoryItem">
                <img class="h-auto max-w-full rounded-lg" src="/public/man-spring-electrical-industrial-professional-electricity-skill-energy-worker-power-art-lines-helmet-wires-cables-wiring-electrician-maintenance-voltage-occupation-1328123.jpg" alt="">
                <div class="capMasory flex justify-center">
                    <span class="self-center text-center  leading-normal  masnoryTitle">
                        Light Maintenance
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
    border: 1px  solid #ddd;
}

.masnoryItem:hover{
border-radius: 10px;
/* border: 1px dotted #ddd;  */
}

.masnoryItem:hover .capMasory{
    transform: translateY(0);
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
