<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import {Pagination } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
import {useI18n} from 'vue-i18n'
import { computed } from 'vue';


import BannerBG from '@/assets/videos/BannerBG.mp4'
import BannerSecond from '@/assets/videos/BannerSecond.mp4'


const {t,locale}=useI18n()
const listBanner = computed(()=>{
    return [
    {
        title: t('bannerHome.slide1.title'),
        secondTitle:  t('bannerHome.slide1.secondTitle'),
        normalText: t('bannerHome.slide1.normalText'),
        linkReadMore: '#',
        background: {
            type: 'video',
            link: BannerBG
        }
    },
    {
        title: t('bannerHome.slide2.title'),
        secondTitle:  t('bannerHome.slide2.secondTitle'),
        normalText: t('bannerHome.slide2.normalText'),
        linkReadMore: '#',
        background: {
            type: 'video',
            link: BannerSecond
        }
    },
    {
        title: t('bannerHome.slide3.title'),
        secondTitle:  t('bannerHome.slide3.secondTitle'),
        normalText: t('bannerHome.slide3.normalText'),
        linkReadMore: '#',
        background: {
            type: 'video',
            link: BannerSecond
        }
    },
]
})
</script>
<template>
    <div class="banner home">
        <div class="pattern">
            <img src="" alt="">
        </div>
        <div class="bgColor"></div>
        <div class="fixedRow">
            <div class="line"></div>
            <div class="content">
                <div class="animated-content">
                    <div class="mouse">
                        <img src="@/assets/images/mouse.svg" class="mouseIcon" alt="Mouse">
                    </div>
                    <div class="circle"></div>
                </div>
                <h5 class="text font-sora">
                    {{ t('bannerHome.discoverText') }}
                </h5>
            </div>
        </div>
        <swiper
            class="swiper"
            :slides-per-view="1"
            dir="ltr"
            :loop="true"
            effect="fade"
            :fade-effect="{crossFade: true}"
            :pagination="{ clickable: true }" 
            :autoplay="{delay: 3000}"
            :modules="[Pagination,EffectFade]"
            >
            <swiper-slide  class="swiper-slide" v-for="(slide, index) in listBanner" :key="index">
               <div class="container">
                    <div class="background">
                        <video :src="slide.background.link" muted loop autoplay
                            v-if="slide.background.type === 'video'"></video>
                        <img :src="slide.background.link" v-else-if="slide.background.type === 'image'" />
                    </div>
                    <div class="container">
                        <h1 class="title">
                            {{ slide.title }}
                        </h1>
                        <h1 class="title">
                            {{ slide.secondTitle }}
                        </h1>
                        <div class="normal-text">
                            {{ slide.normalText }}
                        </div>
                        <RouterLink :to="slide.linkReadMore" class="custom-button" :class="`${locale==='ar'&&'flex-row-reverse'}`">
                            {{t('button.readMore')}}
                            <img src="@/assets/images/arrowToRight.svg" alt="Arrow" :class="`${locale==='ar'&&'rotate-180'}`">
                        </RouterLink>
                    </div>
               </div>
            </swiper-slide>
            <div class="swiper-pagination">
            </div>
        </swiper>
    </div>

</template>


<style>
    
</style>