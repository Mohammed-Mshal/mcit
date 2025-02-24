<template>
    <div class="about">
        <div class="container mx-auto">
            <div class="content">
                <h2 class="custom-title lightBG reveal text-animated">
                    {{ t('aboutMinistryHomePage.title') }}
                </h2>
                <div class="custom-text lightBG reveal text-animated">
                    {{ t('aboutMinistryHomePage.description') }}
                </div>
                <a href="aboutus.html" class="custom-button-2 lightBG reveal text-animated">
                    {{ t('button.readMore') }}
                </a>
            </div>
            <div class="imageSection">
                <img src="@/assets/images/About.png" class="reveal image-animated" alt="">
            </div>
        </div>
    </div>

</template>

<script setup>
    import {useI18n} from 'vue-i18n'
    const {t}=useI18n()
</script>

<style lang="postcss">

.about {
    padding-block: 60px;

    @media (max-width:992px) {
        padding-block: 40px;
    }

    @media (max-width:778px) {
        padding-block: 20px;
    }

    .container {
        display: flex;
        align-items: center;
        gap: 80px;

        @media (max-width:992px) {
            gap: 40px;
            flex-direction: column-reverse;
        }

        @media (max-width:778px) {
            gap: 20px;
        }



        .content {
            display: flex;
            flex-direction: column;
            max-width: 646px;
            flex: 1;

            @media (max-width:992px) {
                max-width: 100%;
            }

            .custom-text {
                margin-block: 32px;
                text-align: justify;

                @media (max-width:558px) {
                    margin-block: 16px;
                }
            }
        }

        .imageSection {
            flex: 1;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }

    &.about-ai .container {
        align-items: stretch;
        flex-direction: row-reverse;

        @media (max-width:992px) {
            gap: 40px;
            flex-direction: column-reverse;
        }

        @media (max-width:778px) {
            gap: 20px;
        }

        .content {
            max-width: none;

            .marker-text {
                color: #684594;
                font-size: 13.67px;
                font-weight: 600;
                line-height: 22px;
                letter-spacing: 1.1200000047683716px;
                padding: 3px 16px;
                border-radius: 14px;
                -webkit-border-radius: 14px;
                -moz-border-radius: 14px;
                -ms-border-radius: 14px;
                -o-border-radius: 14px;
                background: #9747FF14;
                width: fit-content;
                margin-bottom: 24px;

                @media (max-width:992px) {
                    margin-bottom: 16px;
                }

                @media (max-width:778px) {
                    margin-bottom: 12px;
                }

            }

            .custom-title {
                font-size: clamp(20px, 3vw, 30px);
                font-weight: 700;
                line-height: 40px;
                letter-spacing: -0.6399999856948853px;
                margin: 0;
                color: #000;
            }

            .custom-text {

                @media (max-width:778px) {
                    margin-bottom: 12px;
                }
            }
        }

        .imageSection {
            max-width: 670px;
            overflow: hidden;
            border-radius: 16px;
            -webkit-border-radius: 16px;
            -moz-border-radius: 16px;
            -ms-border-radius: 16px;
            -o-border-radius: 16px;
            position: relative;
            background-color: #1D1C57;

            @media (max-width:992px) {
                max-width: 100%;
            }

            img {
                opacity: .56;
                object-fit: cover;
            }
        }
    }
}
</style>