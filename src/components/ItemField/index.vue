<script setup lang="ts">
import {computed} from 'vue'
type Item = {
  name: string
  diameter: number
}

const props = defineProps<{
  item: Item
}>()

const emits = defineEmits<{(e: 'changeItem', value: Item): void, (e: 'remove'): void}>()

const handleRemove = () => {
  emits('remove')
}

const changeItem = (partial: Partial<Item>) => {
  emits('changeItem', { ...props.item, ...partial })
}

const nameModel = computed({
  get: () => props.item.name,
  set: (name) => changeItem({ name }),
})

const diameterModel = computed({
  get: () => props.item.diameter,
  set: (diameter) => changeItem({ diameter: Number(diameter) }),
})
</script>

<template>
  <div class="flex items-center gap-2">
    <p class="flex-1">
      <input class="input input-bordered w-full" placeholder="名前" v-model="nameModel" />
    </p>
    <p class="flex-1">
      <label class="input-group">
        <input type="number" placeholder="0.01" class="input input-bordered" v-model="diameterModel" />
        <span>mm</span>
      </label>
    </p>
    <p>
      <button @click="handleRemove" type="button" class="btn btn-ghost">削除</button>
    </p>
  </div>
</template>
