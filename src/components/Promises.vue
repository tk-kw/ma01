<template>
    <div>
        <div class="text-center mb-20">
            <div class="ma-section-title mb-4">事業承継の3つの約束</div>
            <div class="text-xs md:text-sm font-bold tracking-wider">Business succession three promises</div>
        </div>
        <div class="flex justify-center items-center gap-24 flex-col lg:flex-row">
            <Promise img="/promise01.png"
                textimg="/promise-text01.png"
                title="現事業をそのまま"
                description="従業員の雇用を引継ぎ仕事の掛け算を目指します。"
            />
            <Promise img="/promise02.png"
                textimg="/promise-text02.png"
                title="想いも大切に"
                description="大切にされてきた想いも一緒に引継ぎます。"
            />
            <Promise img="/promise03.png"
                textimg="/promise-text03.png"
                title="地方を元気に"
                description="地方を元気に。そして地方圏から日本を元気にします。"
            />
        </div>
    </div>
</template>

<script setup>
import Promise from './Promise.vue'

</script>