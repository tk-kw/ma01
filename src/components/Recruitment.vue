<script setup>
import RecImgs from './RecImgs.vue';

// const mainBus = [
//     {
//         img:"/bus_01.jpg",
//         name:"農業・畜産業",
//     },
//     {
//         img:"/bus_02.jpg",
//         name:"水産業",
//     }
// ];

</script>

<template>
    <div class="relative py-16 ma-background-recm lg:ma-background-recm-lg">
        <div class="container m-auto flex flex-col justify-start w-4/5 lg:w-[845px]">
            <div class="flex items-start text-white border-t-[1px] m-auto flex-col py-12 gap-7 lg:gap-11 lg:p-12 lg:flex-row lg:py-12">
                <div class="text-center mb-8 lg:mb-20">
                    <div class="ma-section-title mb-4">募集事業</div>
                    <div class="text-sm tracking-wider">recruitment business</div>
                </div>
                <div>
                    <div class="font-bold text-2xl tracking-wider lg:text-3xl mb-4">
                        <p class="mb-2 lg:mb-4">さまざまな事業を</p>
                        <p>広く募集しております。</p>
                    </div>
                    <div class="text-base leading-7 lg:text-xl lg:leading-10">
                        <p>幅広い事業者のみなさんと一緒に拡大していきたいと思っております。</p>
                        <p>たとえばこれらのような事業など！</p>
                    </div>
                </div>
            </div>
            <div class="absolute flex flex-col gap-6 pt-96 lg:pt-72">
                <div class="flex justify-start overflow-x-scroll lg:justify-end">
                    <!-- <div v-for="(img, name) in mainBus">
                        <RecImgs img={{img}}
                            name={{name}}
                        />
                    </div> -->
                    <RecImgs img="/bus_01.jpg"
                        name="農業・畜産業"
                    />
                    <RecImgs img="/bus_02.jpg"
                        name="水産業"
                    />
                    <RecImgs img="/bus_03.jpg"
                        name="菓子製造業"
                    />
                    <RecImgs img="/bus_04.jpg"
                        name="食料品製造業"
                    />
                    <RecImgs img="/bus_05.jpg"
                        name="飲食業"
                    />
                </div>
                <div class="flex gap-3 lg:gap-4 md:container max-w-xs lg:w-[845px] flex-wrap">
                    <div class="ma-chip">
                        <p>化粧品製造</p>
                    </div>
                    <div class="ma-chip">
                        <p>衣服・繊維製品製造業</p>
                    </div>
                    <div class="ma-chip">
                        <p>木製品製造業</p>
                    </div>
                    <div class="ma-chip">
                        <p>紙加工品製造業</p>
                    </div>
                    <div class="ma-chip">
                        <p>プラスチック製品製造業</p>
                    </div>
                    <div class="ma-chip">
                        <p>革製品製造業</p>
                    </div>
                </div>
                <div class="flex gap-8 border-b-[1px] pb-16 w-[845px] flex-col lg:flex-row lg:items-center lg:gap-20">
                    <div>
                        <img class="w-[20rem] lg:w-[30rem] mb-4" src="/rec_text.png" alt="">
                        <p class="w-[20rem] lg:w-full text-xl lg:text-2xl text-white">っと少しでも思ったらお気軽にお問い合わせください！</p>
                    </div>
                    <div class="w-[20rem] lg:w-full flex justify-center">
                        <img src="/rec_btn.png" alt="">
                    </div>
                </div>
                <div class="flex gap-11 items-start text-white py-12 flex-col lg:flex-row">
                <div class="text-center lg:mb-20">
                    <div class="ma-section-title mb-4">希望条件</div>
                    <div class="text-sm tracking-wider">requirement</div>
                </div>
                <div class="flex flex-col justify-start gap-6">
                    <div class="flex gap-4 items-center">
                        <p class="ma-chip-sq">業種・分野</p>
                        <p class="w-52 lg:w-full">全ての業種・分野</p>
                    </div>
                    <div class="flex gap-4 items-center">
                        <p class="ma-chip-sq">対象地域</p>
                        <p class="w-52 lg:w-full">九州全域（福岡県、佐賀県、長崎県、熊本県、大分県、宮崎県、鹿児島県）</p>
                    </div>
                    <div class="flex gap-4 items-center">
                        <p class="ma-chip-sq">その他</p>
                        <p class="w-52 lg:w-full">全ての業種・分野</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

