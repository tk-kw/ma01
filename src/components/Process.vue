<template>
	<div class="flex gap-16 items-center text-white m-auto bg-oga overflow-hidden h-full w-11/12 lg:w-auto lg:h-[700px] ma-roundbox flex-col lg:flex-row">
        <div class="border-r-[1px] px-8 -rotate-90 h-[80px] lg:rotate-0 lg:h-full">
            <img src="/oga_ma_project.png" alt="ogaland M&A project">
        </div>
		<div class="p-1">
			<div class="text-center mb-14 lg:mb-20">
				<div class="ma-section-title mb-4">事業引き継ぎまでの流れ</div>
				<div class="text-sm tracking-wider">
					The process of business succession
				</div>
			</div>
			<div class="flex flex-col gap-9">
				<ProcessStep
					num="01"
					text="お問い合わせ"
				/>
				<ProcessStep
					num="02"
					text="面談"
				/>
				<ProcessStep
					num="03"
					text="ご契約"
				/>
			</div>
		</div>
		<div>
            <div class="h-72 lg:h-auto overflow-hidden">
                <img class="-translate-y-36 lg:translate-y-0" src="/process_img.jpg" alt="事業引き継ぎ" />
            </div>
		</div>
	</div>
</template>

<script setup>
import ProcessStep from './ProcessStep.vue';
</script>
