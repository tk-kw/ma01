<script setup>
import HeroSlider from './HeroSlider.vue'

</script>

<template>
    <div>
        <div class="container mx-auto relative rounded-lg overflow-hidden">
            <div class="flex flex-col gap-4 absolute top-1/2 left-0 pl-9 -translate-y-1/2 text-white z-20">
                <div class="ma-section-title md:text-4xl">あなたが培ってきた事業</div>
                <div class="ma-bold-wider text-4xl md:text-[60px] leading-normal">ogalandと一緒に<br>取り組んでみませんか？</div>
            </div>
            <HeroSlider/>
        </div>
    </div>
</template>