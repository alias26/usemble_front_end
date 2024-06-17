<template>
    <div id="adminProfile" class="d-flex">
        <img id="adminImg" src="../../assets/admin.png" alt="" />
        <span id="adminId">관리자</span>
    </div>
    <div>
        <RouterLink to="/admin/dashBoard">대시보드</RouterLink>
    </div>
    <div>
        <RouterLink to="/admin/socialingTable">소셜링 관리</RouterLink>
    </div>
</template>
<script setup>
import { RouterLink } from 'vue-router';
</script>
<style scoped>
#adminProfile {
    justify-content: center;
    border: solid;
}
#adminImg {
    width: 60px;
    margin-right: 10px;
}

#adminId {
    align-content: center;
    font-size: 20px;
    font-weight: 700;
}
</style>


