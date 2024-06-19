<template>
    <div>
        <h3 style="margin-bottom: 40px">
            <span style="font-weight: 600">{{ title }}</span>
        </h3>
        <div class="pageCategory container">
            <div class="wrapper">
                <div class="pageOption">
                    <div class="dropdown">
                        <button
                            class="btn btn-sm dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            카테고리
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">전체보기</a></li>
                            <li><a class="dropdown-item" href="#">모임</a></li>
                            <li><a class="dropdown-item" href="#">운동</a></li>
                            <li><a class="dropdown-item" href="#">자기계발</a></li>
                            <li><a class="dropdown-item" href="#">음식</a></li>
                            <li><a class="dropdown-item" href="#">여행</a></li>
                        </ul>
                    </div>
                    <div class="dropdown ms-2">
                        <button
                            class="btn btn-sm dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            정렬
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">최신순</a></li>
                            <li><a class="dropdown-item" href="#">마감임박순</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps(["title"]);
</script>

<style scoped>
/* 페이지 리스트 */
.pageOption {
    flex-wrap: wrap;
    display: flex;
}
.pageCategory {
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: space-between;
    display: flex;
    padding: 0;
}
.wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.btn {
    background-color: #558ccf;
    color: white;
}
</style>
