<template>
    <div class="flex flex-col gap-12">
        <div class="flex w-full gap-12 lg:gap-20 overflow-hidden">
            <SlideProduct
                img="/product_01.png"
                name="エプソモアボーテ"
            />
            <SlideProduct
                img="/product_02.png"
                name="ドライマンゴー"
            />
            <SlideProduct
                img="/product_03.png"
                name="えびのおかしら"
            />
            <SlideProduct
                img="/product_04.png"
                name="彩滴"
            />
            <SlideProduct
                img="/product_05.png"
                name="ペットシャンプー"
            />
        </div>
        <div class="flex w-full gap-20 overflow-hidden">
            <SlideProduct
                img="/product_06.png"
                name="抹茶ラテ"
            />
            <SlideProduct
                img="/product_07.png"
                name="selva"
            />
            <SlideProduct
                img="/product_08.png"
                name="たんぱくとれーる雑穀米"
            />
            <SlideProduct
                img="/product_09.png"
                name="よもぎ粉末"
            />
        </div>
    </div>
</template>

<script setup>
import SlideProduct from './SlideProduct.vue';
</script>