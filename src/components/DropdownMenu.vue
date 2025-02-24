<script setup>
    import { ref,onMounted,onUnmounted } from 'vue';
    import { RouterLink } from 'vue-router';
    const toggleDropdown = ref(false);
    const dropdownRef = ref(null);

    const setToggleDropdown=()=>{
        toggleDropdown.value=!toggleDropdown.value
    }
    const handleClickOutside = (event) => {
        if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
            toggleDropdown.value = false;
        }
    }
    onMounted(() => {
        document.addEventListener('click', handleClickOutside);
    });

    onUnmounted(() => {
        document.removeEventListener('click', handleClickOutside);
    });
    const props=defineProps({
        MainLink:{
            type:String,
            required:true
        },
        MainText:{
            type:String,
            required:true
        },
        ListSubLink:{
            type:Array,
            required:true
        }
    })
</script>
<template>
    <div class="relative" ref="dropdownRef">
        <button class="dropdown flex cursor-pointer" :class="`${toggleDropdown&&'show'}`">
            <RouterLink :to="props.MainLink">
                {{ props.MainText }}
            </RouterLink>
            <img src="@/assets/images/dropdown.svg" alt="Arrow Dropdown" @click="setToggleDropdown">
        </button>
        <div class="list-dropdown z-10" ref="list-dropdown">
            <div v-for="subLink in props.ListSubLink" :key="subLink.link">
                <RouterLink :to="subLink.link">
                    {{ subLink.text }}
                </RouterLink>
            </div>
        </div>
    </div>
</template>