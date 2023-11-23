<script setup>

import AdvantagesList from "../components/AdvantagesList.vue";
import {onMounted} from "vue";
import StatList from "../components/StatList.vue";
import {useAdvantagesStore} from '@/stores/advantagesStore'
import {useStatsStore} from '@/stores/statsStore'
import ReviewsSlider from "@/components/ReviewsSlider.vue";
import {useReviewStore} from "@/stores/reviewStore";
import Title from "@/components/global/Title.vue";
import Footer from "@/components/Footer.vue";
import Node from "@/icons/Node.vue"
import UHeader from "@/components/global/UHeader.vue";


const advantagesStore = useAdvantagesStore()
const statsStore = useStatsStore()
const reviewStore = useReviewStore()


onMounted(() => {
    advantagesStore.getAdvantages()
    statsStore.getStats()
    reviewStore.getReviews()
})

</script>

<template>
    <div class="background" style="overflow: hidden">
        <UHeader/>
        <div class="wrapper max-xl:justify-center max-xl:items-center">
            <div class="land__container">
                <div class="title__block ">
                    <h1 class="title__text">
                        войти в it — просто
                    </h1>
                    <div class="title__desc">
                        <h3>
                            Попробуйте бесплатные занятия по ссылке ниже и прочувствуйте профессию будущего
                        </h3>
                    </div>
                </div>
                <div class="land__btn" @click="$router.push('/courses')">
                    Попробовать
                    <svg class="kitten" xmlns="http://www.w3.org/2000/svg" width="128" height="140"
                         viewBox="0 0 128 140" fill="none">
                        <g filter="url(#filter0_d_39_243)">
                            <path d="M83.9727 48.4549L78.4795 44.2649L75.8333 64.8216L81.3265 69.0117L83.9727 48.4549Z"
                                  fill="#B536D5"/>
                            <path d="M90.3479 45.7926L83.9727 48.4548L81.3265 69.0116L87.7017 66.3494L90.3479 45.7926Z"
                                  fill="#9021AC"/>
                            <path d="M90.3482 45.7927L84.855 41.6027L78.4797 44.2649L83.9729 48.4549L90.3482 45.7927Z"
                                  fill="#CFBDFD"/>
                            <path d="M82.1197 86.2796L75.8418 81.491L74.5817 91.2799L80.8596 96.0685L82.1197 86.2796Z"
                                  fill="#9021AC"/>
                            <path d="M89.4061 83.237L82.1201 86.2795L80.86 96.0685L88.146 93.0259L89.4061 83.237Z"
                                  fill="#9021AC"/>
                            <path d="M89.4059 83.237L83.1279 78.4484L75.8419 81.4909L82.1199 86.2795L89.4059 83.237Z"
                                  fill="#CFBDFD"/>
                            <path d="M88.0027 60.6662L64.4604 42.709L61.3102 67.1813L84.8525 85.1385L88.0027 60.6662Z"
                                  fill="#B193FC"/>
                            <path d="M92.5562 58.7645L88.0024 60.6661L84.8522 85.1385L89.406 83.2369L92.5562 58.7645Z"
                                  fill="#9021AC"/>
                            <path d="M92.5564 58.7646L69.0142 40.8074L64.4604 42.709L88.0027 60.6662L92.5564 58.7646Z"
                                  fill="#B536D5"/>
                            <path d="M69.3695 91.6041L65.4458 88.6112L64.8158 93.5057L68.7395 96.4985L69.3695 91.6041Z"
                                  fill="#D9D9D9"/>
                            <path d="M82.1201 86.2795L69.3696 91.604L68.7396 96.4985L81.4901 91.174L82.1201 86.2795Z"
                                  fill="#B3B3B3"/>
                            <path d="M82.12 86.2795L78.1963 83.2866L65.4458 88.6111L69.3695 91.604L82.12 86.2795Z"
                                  fill="white"/>
                            <path d="M44.8814 80.9884L38.6035 76.1998L37.2804 86.4782L43.5584 91.2668L44.8814 80.9884Z"
                                  fill="#A328C2"/>
                            <path d="M52.1674 77.9457L44.8813 80.9883L43.5583 91.2667L50.8443 88.2241L52.1674 77.9457Z"
                                  fill="#9021AC"/>
                            <path d="M52.1676 77.9458L45.8896 73.1572L38.6036 76.1998L44.8816 80.9884L52.1676 77.9458Z"
                                  fill="#CFBDFD"/>
                            <path d="M55.8052 89.8579L44.8188 81.4779L44.1888 86.3724L55.1752 94.7524L55.8052 89.8579Z"
                                  fill="#D9D9D9"/>
                            <path d="M60.3589 87.9563L55.8052 89.8579L55.1751 94.7524L59.7289 92.8508L60.3589 87.9563Z"
                                  fill="#B3B3B3"/>
                            <path d="M60.3589 87.9563L49.3726 79.5763L44.8188 81.4779L55.8052 89.8579L60.3589 87.9563Z"
                                  fill="white"/>
                            <path d="M50.1688 53.3082L46.2451 50.3153L43.0949 74.7876L47.0186 77.7805L50.1688 53.3082Z"
                                  fill="#B193FC"/>
                            <path d="M68.3835 45.7018L50.1685 53.3082L47.0182 77.7806L65.2332 70.1742L68.3835 45.7018Z"
                                  fill="#8865E1"/>
                            <path d="M68.3837 45.7019L64.46 42.709L46.2449 50.3154L50.1687 53.3082L68.3837 45.7019Z"
                                  fill="#B536D5"/>
                            <path d="M39.3602 70.3265L36.2212 67.9323L36.0322 69.4006L39.1711 71.7949L39.3602 70.3265Z"
                                  fill="#666666"/>
                            <path d="M41.1814 69.5659L39.3599 70.3265L39.1708 71.7949L40.9924 71.0342L41.1814 69.5659Z"
                                  fill="#404040"/>
                            <path d="M41.1814 69.5659L38.0425 67.1716L36.221 67.9323L39.3599 70.3266L41.1814 69.5659Z"
                                  fill="#8C8C8C"/>
                            <path d="M38.9192 73.7526L35.7803 71.3583L35.5913 72.8266L38.7302 75.2209L38.9192 73.7526Z"
                                  fill="#666666"/>
                            <path d="M40.7404 72.9919L38.9189 73.7526L38.7299 75.2209L40.5514 74.4603L40.7404 72.9919Z"
                                  fill="#404040"/>
                            <path d="M40.7405 72.992L37.6016 70.5977L35.7801 71.3583L38.919 73.7526L40.7405 72.992Z"
                                  fill="#8C8C8C"/>
                            <path d="M80.4356 59.1945L64.7407 47.223L64.1107 52.1175L79.8055 64.089L80.4356 59.1945Z"
                                  fill="#666666"/>
                            <path d="M84.0785 57.6732L80.4355 59.1945L79.8055 64.0889L83.4485 62.5676L84.0785 57.6732Z"
                                  fill="#404040"/>
                            <path d="M84.0786 57.6733L68.3838 45.7018L64.7408 47.2231L80.4356 59.1945L84.0786 57.6733Z"
                                  fill="#8C8C8C"/>
                            <path d="M76.793 60.7159L61.0981 48.7444L60.4681 53.6388L76.1629 65.6103L76.793 60.7159Z"
                                  fill="#B193FC"/>
                            <path d="M80.4355 59.1945L76.7925 60.7158L76.1624 65.6103L79.8054 64.089L80.4355 59.1945Z"
                                  fill="#8865E1"/>
                            <path d="M80.436 59.1946L64.7412 47.2231L61.0982 48.7444L76.793 60.7159L80.436 59.1946Z"
                                  fill="#B536D5"/>
                            <path d="M73.1499 62.2371L57.4551 50.2656L56.825 55.1601L72.5199 67.1316L73.1499 62.2371Z"
                                  fill="#666666"/>
                            <path d="M76.7924 60.7159L73.1494 62.2372L72.5194 67.1316L76.1624 65.6104L76.7924 60.7159Z"
                                  fill="#404040"/>
                            <path d="M76.793 60.7159L61.0981 48.7444L57.4551 50.2657L73.15 62.2371L76.793 60.7159Z"
                                  fill="#8C8C8C"/>
                            <path d="M69.5064 63.7585L53.8115 51.787L53.1815 56.6815L68.8763 68.6529L69.5064 63.7585Z"
                                  fill="#B193FC"/>
                            <path d="M73.1494 62.2371L69.5063 63.7584L68.8763 68.6529L72.5193 67.1316L73.1494 62.2371Z"
                                  fill="#8865E1"/>
                            <path d="M73.1494 62.2371L57.4546 50.2656L53.8116 51.7869L69.5064 63.7584L73.1494 62.2371Z"
                                  fill="#B536D5"/>
                            <path d="M62.0836 94.6465L55.8057 89.8579L54.5456 99.6468L60.8235 104.435L62.0836 94.6465Z"
                                  fill="#A328C2"/>
                            <path d="M69.3695 91.6039L62.0835 94.6465L60.8234 104.435L68.1094 101.393L69.3695 91.6039Z"
                                  fill="#9021AC"/>
                            <path d="M69.3692 91.6039L63.0913 86.8153L55.8053 89.8579L62.0832 94.6465L69.3692 91.6039Z"
                                  fill="#CFBDFD"/>
                            <path d="M65.8633 65.2797L50.1685 53.3082L49.5384 58.2027L65.2332 70.1742L65.8633 65.2797Z"
                                  fill="#666666"/>
                            <path d="M69.5063 63.7584L65.8633 65.2797L65.2332 70.1741L68.8762 68.6528L69.5063 63.7584Z"
                                  fill="#404040"/>
                            <path d="M69.5064 63.7585L53.8115 51.787L50.1685 53.3083L65.8634 65.2797L69.5064 63.7585Z"
                                  fill="#8C8C8C"/>
                            <path d="M69.7875 68.2727L65.8638 65.2798L62.7135 89.7521L66.6372 92.745L69.7875 68.2727Z"
                                  fill="#B193FC"/>
                            <path d="M88.0026 60.6662L69.7876 68.2726L66.6374 92.7449L84.8524 85.1385L88.0026 60.6662Z"
                                  fill="#9021AC"/>
                            <path d="M88.0028 60.6662L84.0791 57.6733L65.8641 65.2797L69.7878 68.2726L88.0028 60.6662Z"
                                  fill="#B536D5"/>
                            <path d="M65.2332 70.1741L41.6909 52.2169L38.5407 76.6892L62.0829 94.6465L65.2332 70.1741Z"
                                  fill="#A328C2"/>
                            <path d="M69.7867 68.2725L65.2329 70.1741L62.0827 94.6464L66.6364 92.7448L69.7867 68.2725Z"
                                  fill="#9021AC"/>
                            <path d="M69.7869 68.2725L46.2446 50.3153L41.6909 52.2169L65.2331 70.1741L69.7869 68.2725Z"
                                  fill="#B536D5"/>
                            <path d="M50.1687 53.3081L42.3213 47.3224L41.6912 52.2169L49.5387 58.2026L50.1687 53.3081Z"
                                  fill="#A328C2"/>
                            <path d="M54.7222 51.4066L50.1685 53.3082L49.5384 58.2027L54.0922 56.3011L54.7222 51.4066Z"
                                  fill="#9021AC"/>
                            <path d="M54.7224 51.4066L46.875 45.4209L42.3212 47.3225L50.1687 53.3082L54.7224 51.4066Z"
                                  fill="#B536D5"/>
                            <path d="M48.5332 54.0431L43.8247 50.4517L43.4467 53.3883L48.1551 56.9798L48.5332 54.0431Z"
                                  fill="#666666"/>
                            <path d="M48.181 75.4425L45.042 73.0482L44.2859 78.9216L47.4249 81.3159L48.181 75.4425Z"
                                  fill="#D9D9D9"/>
                            <path d="M50.0027 74.6817L48.1812 75.4424L47.4251 81.3157L49.2466 80.5551L50.0027 74.6817Z"
                                  fill="#B3B3B3"/>
                            <path d="M50.0027 74.6818L46.8638 72.2875L45.0423 73.0481L48.1812 75.4424L50.0027 74.6818Z"
                                  fill="white"/>
                            <path d="M51.0052 80.2839L47.8662 77.8896L47.6772 79.358L50.8162 81.7523L51.0052 80.2839Z"
                                  fill="#D9D9D9"/>
                            <path d="M52.8264 79.5233L51.0049 80.2839L50.8159 81.7523L52.6374 80.9916L52.8264 79.5233Z"
                                  fill="#B3B3B3"/>
                            <path d="M52.8265 79.5233L49.6875 77.129L47.866 77.8897L51.005 80.284L52.8265 79.5233Z"
                                  fill="white"/>
                            <path d="M47.7456 65.4353L42.2524 61.2452L41.2444 69.0764L46.7376 73.2664L47.7456 65.4353Z"
                                  fill="#FCE593"/>
                            <path d="M48.6564 65.055L47.7456 65.4353L46.7375 73.2664L47.6483 72.8861L48.6564 65.055Z"
                                  fill="#E1C665"/>
                            <path d="M48.6568 65.0549L43.1636 60.8649L42.2528 61.2452L47.746 65.4352L48.6568 65.0549Z"
                                  fill="#FDEFBD"/>
                            <path d="M47.746 65.4353L43.8223 62.4424L43.1922 67.3368L47.1159 70.3297L47.746 65.4353Z"
                                  fill="#666666"/>
                            <path d="M48.6568 65.0549L47.7461 65.4352L47.116 70.3296L48.0268 69.9493L48.6568 65.0549Z"
                                  fill="#404040"/>
                            <path d="M48.6566 65.0549L44.7329 62.062L43.8222 62.4423L47.7459 65.4352L48.6566 65.0549Z"
                                  fill="#8C8C8C"/>
                            <path d="M51.3201 77.8367L48.1812 75.4424L47.8661 77.8896L51.0051 80.2839L51.3201 77.8367Z"
                                  fill="#B193FC"/>
                            <path d="M53.1413 77.076L51.3198 77.8367L51.0048 80.2839L52.8263 79.5233L53.1413 77.076Z"
                                  fill="#8865E1"/>
                            <path d="M53.1414 77.0759L50.0024 74.6816L48.1809 75.4423L51.3199 77.8366L53.1414 77.0759Z"
                                  fill="#CFBDFD"/>
                            <path d="M54.4588 80.2311L51.3198 77.8368L50.5638 83.7101L53.7027 86.1044L54.4588 80.2311Z"
                                  fill="#D9D9D9"/>
                            <path d="M56.2805 79.4704L54.459 80.2311L53.7029 86.1044L55.5244 85.3438L56.2805 79.4704Z"
                                  fill="#B3B3B3"/>
                            <path d="M56.2806 79.4705L53.1416 77.0762L51.3201 77.8368L54.4591 80.2311L56.2806 79.4705Z"
                                  fill="white"/>
                            <path d="M61.0865 75.611L55.5933 71.421L54.5852 79.2522L60.0784 83.4422L61.0865 75.611Z"
                                  fill="#FCE593"/>
                            <path d="M61.9977 75.2308L61.0869 75.6111L60.0788 83.4422L60.9896 83.0619L61.9977 75.2308Z"
                                  fill="#E1C665"/>
                            <path d="M61.9976 75.2307L56.5044 71.0406L55.5936 71.421L61.0868 75.611L61.9976 75.2307Z"
                                  fill="#FDEFBD"/>
                            <path d="M47.7458 65.4353L46.1763 64.2382L45.9243 66.1959L47.4937 67.3931L47.7458 65.4353Z"
                                  fill="#D9D9D9"/>
                            <path d="M48.6564 65.055L47.7456 65.4353L47.4936 67.3931L48.4043 67.0128L48.6564 65.055Z"
                                  fill="#B3B3B3"/>
                            <path d="M48.6564 65.0549L47.0869 63.8578L46.1762 64.2381L47.7456 65.4353L48.6564 65.0549Z"
                                  fill="white"/>
                            <path d="M61.0868 75.611L57.1631 72.6182L56.533 77.5126L60.4567 80.5055L61.0868 75.611Z"
                                  fill="#666666"/>
                            <path d="M61.9977 75.2308L61.0869 75.6111L60.4569 80.5055L61.3676 80.1252L61.9977 75.2308Z"
                                  fill="#404040"/>
                            <path d="M61.9974 75.2307L58.0737 72.2378L57.163 72.6181L61.0867 75.611L61.9974 75.2307Z"
                                  fill="#8C8C8C"/>
                            <path d="M61.0866 75.6111L59.5171 74.4139L59.2651 76.3717L60.8346 77.5689L61.0866 75.6111Z"
                                  fill="#D9D9D9"/>
                            <path d="M61.9972 75.2308L61.0864 75.6111L60.8344 77.5689L61.7452 77.1886L61.9972 75.2308Z"
                                  fill="#B3B3B3"/>
                            <path d="M61.9972 75.2307L60.4277 74.0336L59.517 74.4139L61.0865 75.611L61.9972 75.2307Z"
                                  fill="white"/>
                            <path d="M66.0413 90.678L62.9023 88.2837L62.7133 89.752L65.8523 92.1463L66.0413 90.678Z"
                                  fill="#666666"/>
                            <path d="M67.863 89.9175L66.0415 90.6781L65.8525 92.1464L67.674 91.3858L67.863 89.9175Z"
                                  fill="#404040"/>
                            <path d="M67.8631 89.9174L64.7241 87.5231L62.9026 88.2837L66.0416 90.678L67.8631 89.9174Z"
                                  fill="#8C8C8C"/>
                            <path d="M65.6004 94.1041L62.4614 91.7098L62.2724 93.1782L65.4114 95.5725L65.6004 94.1041Z"
                                  fill="#666666"/>
                            <path d="M67.4221 93.3435L65.6006 94.1041L65.4116 95.5725L67.2331 94.8118L67.4221 93.3435Z"
                                  fill="#404040"/>
                            <path d="M67.4222 93.3435L64.2832 90.9492L62.4617 91.7099L65.6007 94.1042L67.4222 93.3435Z"
                                  fill="#8C8C8C"/>
                            <path d="M65.8635 65.2797L58.0161 59.2939L57.3861 64.1884L65.2335 70.1741L65.8635 65.2797Z"
                                  fill="#A328C2"/>
                            <path d="M70.4175 63.3781L65.8638 65.2797L65.2337 70.1741L69.7875 68.2725L70.4175 63.3781Z"
                                  fill="#9021AC"/>
                            <path d="M70.4172 63.3781L62.5698 57.3923L58.0161 59.2939L65.8635 65.2797L70.4172 63.3781Z"
                                  fill="#B536D5"/>
                            <path d="M66.5142 50.1878L61.021 45.9978L60.1389 52.8501L65.6321 57.0401L66.5142 50.1878Z"
                                  fill="#A328C2"/>
                            <path d="M91.1039 39.9192L66.5137 50.1879L65.6316 57.0401L90.2219 46.7715L91.1039 39.9192Z"
                                  fill="#9021AC"/>
                            <path d="M91.104 39.9193L85.6108 35.7292L61.0206 45.9979L66.5138 50.1879L91.104 39.9193Z"
                                  fill="#B536D5"/>
                            <path d="M64.2285 66.0145L59.52 62.4231L59.142 65.3598L63.8504 68.9512L64.2285 66.0145Z"
                                  fill="#666666"/>
                        </g>
                        <defs>
                            <filter id="filter0_d_39_243" x="0.591309" y="0.729248" width="126.965" height="138.706"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="17.5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_39_243"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_39_243"
                                         result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
        <Node class="node max-2xl:hidden" />
    </div>
    <div class="dark:bg-main"></div>
    <AdvantagesList :advantages="advantagesStore.advantages"/>
    <StatList
        :stats="statsStore.stats"
    />
    <Title>
        отзывы
    </Title>
    <ReviewsSlider :reviews="reviewStore.reviews"/>
    <Footer class="mt-32"/>
</template>

<style scoped>
.background {
    min-height: 100vh;
    mix-blend-mode: soft-light;
    background-image: url('@/assets/images/nice1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}

.wrapper {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
}

.title__text {
    font-family: 'JetBrains Mono NL ExtraBold', sans-serif;
    font-size: clamp(2rem, 1.6rem + 2vw, 4rem);
    letter-spacing: 5px;
    text-transform: uppercase;
}

.title__desc {
    margin-top: clamp(5px, 4vw, 17px);
    font-size: clamp(1rem, 0.8rem + 1vw, 2rem);
    font-family: 'JetBrains Mono NL Thin', sans-serif;

}

.land__container {
    padding-left: clamp(15px, 4vw, 93px);
    padding-right: clamp(0px, 4vw, 15px);
    width: clamp(300px, 95vw, 930px);
}

.land__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 20px 35px;
    cursor: pointer;
    background: linear-gradient(93deg, #4529EE 0.31%, #6129D3 45.64%, #6E28C6 96.47%);
    color: #fff;
    font-family: 'Mulish', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 10px;
    width: clamp(160px, 30vw, 323px);
    font-size: clamp(1rem, 0.8rem + 1vw, 2rem);
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.35);
    margin-top: 50px
}

.kitten {
    position: absolute;
    bottom: 10px;
    right: -50px;
}

.node {
    position: absolute;
    right: 0;
    bottom: -60px;
    width: clamp(150px, 60vw, 1013.29px);
    height: clamp(210px, 60vw, 1171.25px);
}

</style>