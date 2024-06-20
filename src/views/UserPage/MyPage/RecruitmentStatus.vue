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

            <tr v-for="(member, index) in members" :key="index">
                <td>모집중</td>
                <td>
                    <RouterLink class="text-decoration-none" to="../user/info">{{
                        member.mname
                    }}</RouterLink>
                </td>
                <td>{{ member.msex }}</td>
                <td>{{ member.mssn }}</td>
                <td>{{ member.mdate }}</td>
            </tr>
        </table>
    </div>
</template>

<script setup>
function getJoinMember(sno) {
    const members = [
        {
            mname: "김명환1",
            msex: "male",
            mssn: "9506181",
            mdate: "2024.06.19",
        },
        {
            mname: "김명환2",
            msex: "male",
            mssn: "9506181",
            mdate: "2024.06.19",
        },
    ];
    return members;
}

const members = getJoinMember(1);
</script>

<style scoped>
th,
td {
    padding: 10px;
}
</style>
