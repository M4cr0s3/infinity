<script setup>

import {useUserStore} from "@/stores/user";

const userStore = useUserStore()


</script>

<template>
    <header class="header">
        <div class="header__container max-sm:flex-col">
            <div class="header__logo">
                <RouterLink to="/" class="header__logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="83" height="45" viewBox="0 0 83 45" fill="none">
                        <g clip-path="url(#clip0_32_190)">
                            <path
                                d="M81.5563 18.2817C80.5645 15.9163 79.1091 13.7951 77.2311 11.9777C75.3532 10.1604 73.1612 8.75192 70.717 7.79212C68.3578 6.8664 65.8665 6.39787 63.3108 6.39787C60.755 6.39787 58.2637 6.8664 55.9045 7.79212C53.4603 8.75192 51.2683 10.1604 49.3904 11.9777L49.3757 11.9635L43.0992 18.0375L49.1351 23.8786L55.4116 17.8046L55.4263 17.8188C59.7749 13.6105 66.8495 13.6105 71.1982 17.8188C75.5468 22.0272 75.5468 28.8735 71.1982 33.0818C66.8495 37.2902 59.7749 37.2902 55.4263 33.0818L33.6067 11.9635C31.7287 10.1462 29.5368 8.73772 27.0925 7.77792C24.7333 6.85221 22.2421 6.38367 19.6863 6.38367C17.1305 6.38367 14.6393 6.85221 12.2801 7.77792C9.83582 8.73772 7.64389 10.1462 5.76593 11.9635C3.88797 13.7809 2.43255 15.9021 1.44075 18.2675C0.484162 20.5506 0 22.9614 0 25.4347C0 27.908 0.484162 30.3189 1.44075 32.6019C2.43255 34.9673 3.88797 37.0885 5.76593 38.9059C7.64389 40.7233 9.83582 42.1317 12.2801 43.0915C14.6393 44.0172 17.1305 44.4858 19.6863 44.4858C22.2421 44.4858 24.7333 44.0172 27.0925 43.0915C29.5368 42.1317 31.7287 40.7233 33.6067 38.9059L39.8832 32.8319L33.8473 26.9908L27.5708 33.0648C23.2222 37.2731 16.1475 37.2731 11.7989 33.0648C7.45022 28.8565 7.45022 22.0101 11.7989 17.8018C16.1475 13.5935 23.2222 13.5935 27.5708 17.8018L49.3904 38.9173C51.2683 40.7346 53.4603 42.1431 55.9045 43.1029C58.2637 44.0286 60.755 44.4971 63.3108 44.4971C65.8665 44.4971 68.3578 44.0286 70.717 43.1029C73.1612 42.1431 75.3532 40.7346 77.2311 38.9173C79.1091 37.0999 80.5645 34.9787 81.5563 32.6133C82.5129 30.3302 82.9971 27.9194 82.9971 25.4461C82.9971 22.9728 82.5129 20.5619 81.5563 18.2789V18.2817Z"
                                fill="#221F20"/>
                            <path d="M46.2747 35.8896L34.8691 24.8521L33.2321 26.4363L44.6376 37.4738L46.2747 35.8896Z"
                                  fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_32_190">
                                <rect width="83" height="44" fill="white" transform="translate(0 0.5)"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <h1 class="header__logo__text">INFINITY</h1>
                </RouterLink>
            </div>
            <div class="header__links max-sm:mt-4 z-50">
                <div>
                    <RouterLink to="/mentors" class="header__link">Менторы</RouterLink>
                </div>
                <div>
                    <RouterLink to="/courses" class="header__link">курсы</RouterLink>
                </div>
                <div v-if="!userStore.token">
                    <RouterLink to="/login" class="header__link enter">войти</RouterLink>
                </div>
                <div v-if="userStore.token">
                    <RouterLink to="/login" class="header__link enter">профиль</RouterLink>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>

.header {
    display: flex;
    align-items: center;
}

.header__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
}

.header__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: clamp(15px, 4vw, 93px);
    padding-right: clamp(0, 4vw, 15px);
    padding-top: 28px;
    width: clamp(300px, 95vw, 920px);
}

.header__links {
    display: flex;
    align-items: center;
    gap: clamp(15px, 4vw, 40px);
}

.header__link {
    font-family: 'JetBrains Mono NL Bold';
    font-size: clamp(16px, 2vw, 28px);
    text-decoration: none;
    color: #000;
    text-transform: uppercase;
    position: relative;
    display: block;
}

.header__link:after {
    content: '';
    display: block;
    width: 0;
    color: #4529EE;
    height: 3px;
    position: absolute;
    top: 0;
    right: 0;
    transition: width .3s ease-in-out;
}

.header__link:hover:after {
    width: 100%;
}

.enter {
    color: #4529EE;
}

.header__logo__text {
    color: #221f20;
    margin-left: 10px;
    font-size: clamp(24px, 2vw, 42px);
    font-family: 'Mulish', sans-serif;
    font-weight: 900;
}

</style>