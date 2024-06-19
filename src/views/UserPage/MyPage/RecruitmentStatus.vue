<template>
    <div>
        <h4 class="mb-3">신청자 관리</h4>
        <table class="table table-group-divider table-bordered text-center">
            <tr class="p-2">
                <th>상태</th>
                <th>신청자</th>
                <th>성별</th>
                <th>생년월일</th>
                <th>신청일</th>
            </tr>

            <tr>
                <td>모집중</td>
                <td>
                    <RouterLink class="text-decoration-none" to="../user/info"
                        >김명환</RouterLink
                    >
                </td>
                <td>남성</td>
                <td>1995.06.18</td>
                <td>24.06.19</td>
            </tr>
        </table>
    </div>
</template>

<script setup></script>

<style scoped>
th,
td {
    padding: 10px;
}
</style>
