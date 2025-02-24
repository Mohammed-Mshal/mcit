<script setup>
import { computed, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import DropdownMenu from './DropdownMenu.vue';
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
const toggleLanguage = () => {
    locale.value = locale.value === 'en' ? 'ar' : 'en';
    localStorage.setItem('locale', locale.value);
    document.dir = locale.value === 'ar' ? 'rtl' : 'ltr';
}

const stateMenu = ref(false)
const setStateMenu = () => {
    stateMenu.value = stateMenu.value ? false : true
}
// Get Current Location
const route = useRoute();
const currentPath = computed(() => route.path);
const isScrolling=ref(false)
    document.addEventListener("scroll", (e) => {
        if (document.documentElement.scrollTop > 50) {
            isScrolling.value=true
        } else {
            isScrolling.value=false
        }
    });
    console.log(t('nav.home'));
    
const listLinks = computed(()=>{
    return [
    {
        text: t('nav.home'),
        link: '/'
    },
    {
        text: t('nav.about'),
        link: '/aboutministry'
    },
    {
        mainText: t('nav.structure'),
        linkMain: "/structureofministry",
        listSubLink: [
            {
                link: '/structureofministry#ministerCV',
                text: t('nav.ministerCV')
            },
            {
                link: '/structureofministry#undersecretaryCV',
                text: t('nav.undersecretaryCV')
            },
            {
                link: '/structureofministry',
                text: t('nav.affiliates')
            },
            {
                link: '/structureofministry#departments',
                text: t('nav.departments')
            },
        ]
    },
    {
        text: t('nav.projects'),
        link: '/projectservices'
    },
    {
        text: t('nav.mediaTools'),
        link: '/mediatools'
    },
    {
        text: t('nav.faq'),
        link: '/faq'
    },
    {
        text:  t('nav.contact'),
        link: '/contactus'
    },
]
})
</script>
<template>
    <nav :class="`${isScrolling&&'scrolling'}`">
        <div class="container mx-auto">
            <div class="logo">
                <img src="@/assets/images/MCITLogo.svg" alt="Logo">
            </div>
            <ul :class="`list-unstyled links ${stateMenu && 'active'}`">
                <li v-for="item in listLinks" :key="item.link">
                    <RouterLink :to="item.link" :class="`${currentPath===item.link&&'active'}`"
                        v-if="!item.listSubLink">
                        {{ item.text }}
                    </RouterLink>
                    <DropdownMenu :MainLink="item.linkMain" :MainText="item.mainText" :ListSubLink="item.listSubLink"
                        v-else />
                </li>
            </ul>
            <div class="options">
                <button @click="toggleLanguage" class="language custom-button cursor-pointer">
                    {{ locale === 'en' ? 'العربية' : 'English' }}
                    <img src="@/assets/images/kuwait.svg" alt="" v-if="locale === 'en'">
                    <img src="@/assets/images/en.png" alt="" v-else-if="locale === 'ar'">
                </button>
                <button class="custom-button menuButton cursor-pointer" type="button" @click="setStateMenu">
                    <img src="@/assets/images/menu.svg" alt="Menu" class="openMenu" v-show="!stateMenu">
                    <img src="@/assets/images/close.svg" alt="close" class="closeMenu" v-show="stateMenu">
                </button>
            </div>
        </div>
    </nav>
</template>

<style lang="postcss">
nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    transition: .5s all ease-in-out;
    -webkit-transition: .5s all ease-in-out;
    -moz-transition: .5s all ease-in-out;
    -ms-transition: .5s all ease-in-out;
    -o-transition: .5s all ease-in-out;

    &.scrolling {
        background: #0c0c248f;
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);

        .container {
            .logo {
                height: 100px;

                @media (max-width:1400px) {
                    height: 90px;
                }

                @media (max-width:1200px) {
                    height: 80px;
                }

                @media (max-width:1024px) {
                    height: 70px;
                }

                @media (max-width:778px) {
                    height: 50px;
                }
            }
        }

        .list-submenu,
        .list-dropdown {
            background: radial-gradient(50% 50% at 50% 50%, rgba(50, 50, 50, .6) 0%, rgba(50, 50, 50, 0.8) 100%) !important;
        }
    }

    .container {
        padding-block: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;

        .logo {
            height: 129px;
            width: auto;
            transition: .5s all ease-in;
            -webkit-transition: .5s all ease-in;
            -moz-transition: .5s all ease-in;
            -ms-transition: .5s all ease-in;
            -o-transition: .5s all ease-in;

            img {
                object-fit: contain;
                height: 100%;
                width: 100%;
            }

            @media (max-width:1500px) {
                height: 110px;
            }

            @media (max-width:1400px) {
                height: 100px;
            }

            @media (max-width:1200px) {
                height: 90px;
            }

            @media (max-width:1024px) {
                height: 80px;
            }

            @media (max-width:778px) {
                height: 60px;
            }
        }

        .links {
            display: flex;
            align-items: center;
            gap: 16px;
            margin: 0;
            transition: .5s all ease-in-out;
            -webkit-transition: .5s all ease-in-out;
            -moz-transition: .5s all ease-in-out;
            -ms-transition: .5s all ease-in-out;
            -o-transition: .5s all ease-in-out;
            font-size: 14px;

            @media(max-width:1400px) {
                gap: 16px;
            }



            @media (max-width:1480px) {
                position: fixed;
                top: 0;
                left: 0;
                z-index: -1;
                width: 100%;
                height: 100dvh;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background: linear-gradient(180deg, #1D1C57 0%, #684594 100%);
                pointer-events: none;
                opacity: 0;

                &.active {
                    pointer-events: all;
                    opacity: 1;
                }
            }

            li {
                position: relative;
                button,
                button a,
                a {
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.4);
                    transition: .5s all ease-in-out;
                    -webkit-transition: .5s all ease-in-out;
                    -moz-transition: .5s all ease-in-out;
                    -ms-transition: .5s all ease-in-out;
                    -o-transition: .5s all ease-in-out;
                    border: none;
                    background-color: transparent;
                    img {
                        opacity: .4;
                        transition: .5s all ease-in-out;
                        -webkit-transition: .5s all ease-in-out;
                        -moz-transition: .5s all ease-in-out;
                        -ms-transition: .5s all ease-in-out;
                        -o-transition: .5s all ease-in-out;
                    }

                    &.active,
                    &:hover {
                        color: #FFF;

                        img {
                            opacity: 1;
                        }
                    }
                }

                &>a,
                &>button a {
                    text-decoration: none;

                }

                .dropdown {
                    img {
                        padding-inline: 8px;
                    }

                    &.show {
                        img {
                            rotate: 180deg;
                        }

                        a {

                            color: #FFF;
                        }
                    }

                    &.active a,
                    &.active {
                        color: #FFF;
                    }
                }

                .submenu {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 8px;
                    width: 100%;
                    padding-block: 12px;

                    img {
                        rotate: -90deg;
                    }
                }

                .list-submenu,
                .list-dropdown {
                    position: absolute;
                    background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.08) 100%);
                    border: 1px solid #FFFFFF29;
                    border-radius: 12px;
                    -webkit-border-radius: 12px;
                    -moz-border-radius: 12px;
                    -ms-border-radius: 12px;
                    -o-border-radius: 12px;
                    width: 250px;
                    top: calc(100% + 10px);
                    left: 50%;
                    translate: -50% 0;
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    padding-inline: 16px;
                    pointer-events: none;
                    opacity: 0;
                    transition: .5s all ease-in-out;
                    -webkit-transition: .5s all ease-in-out;
                    -moz-transition: .5s all ease-in-out;
                    -ms-transition: .5s all ease-in-out;
                    -o-transition: .5s all ease-in-out;
                    -webkit-backdrop-filter: blur(10px);
                    backdrop-filter: blur(10px);
                    z-index: 10;

                    &>div {
                        display: flex;

                        a {
                            text-decoration: none;
                            padding-block: 8px;
                            flex: 1 1 100%;
                            color: #FFFFFFaF;

                            &:hover {
                                color: #FFF;
                            }
                        }
                    }
                }

                .list-submenu {
                    top: 20px;
                    translate: 0 0;
                    inset-inline-start: calc(100% + 20px);
                    z-index: 100;

                    @media (max-width:1024px) {
                        translate: -50% 0;
                        left: 50%;
                        top: 100%;
                        background: rgba(50, 50, 50, 1) !important;
                    }


                }

                .submenu.show+.list-submenu {
                    pointer-events: all;
                    opacity: 1;
                }

                .dropdown.show+.list-dropdown {
                    pointer-events: all;
                    opacity: 1;
                }

                &:has(.login) {
                    display: none;
                }

                @media (max-width:778px) {
                    &:has(.login) {
                        display: flex;

                        a {
                            color: #FFF;
                            text-decoration: none;
                        }
                    }

                }
            }
        }

        .options {
            display: flex;
            align-items: center;
            gap: 16px;

            @media (max-width:1400px) {
                gap: 12px;

            }

            @media (max-width:778px) {
                .login {
                    display: none;
                }

            }

            .search {
                height: 24px;
                display: flex;
                padding-inline-end: 16px;
                border-inline-end: 1px solid #FFFFFF8F;

                img {
                    object-fit: contain;
                }
            }

            .menuButton {
                height: 100%;
                width: 42px;
                padding: 12px;
                display: none;

                @media (max-width:1480px) {
                    display: flex;
                }

                img {
                    object-fit: contain;
                    height: 100%;
                    width: 100%;
                }
            }
        }
    }
}
</style>