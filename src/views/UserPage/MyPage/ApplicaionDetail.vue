<template>
    <div class="d-flex justify-content-between" id="socialinfo">
        <div class="d-flex">
            <div id="socialimg">
                <img src="@/assets/와인바.jpg" />
            </div>
            <div>
                <div id="socialtitle">현대식 분재 그리고 와인</div>
                <div id="socialcontent">
                    <div class="mb-1">분재를 현대식으로 좀 더 쉽게 배워보세요.</div>
                    <div class="mb-1">서울특별시 노원구 공릉로26길 26</div>
                </div>
                <div id="socialprice">24,000원</div>
            </div>
        </div>
        <div>
            <button class="d-flex btn me-4" id="review-btn">리뷰작성</button>
            <button class="d-flex btn mt-2 me-4" id="delete-btn">삭제하기</button>
        </div>
    </div>
</template>
<script setup></script>
<style scoped>
img {
    width: 180px;
    height: 120px;
}
#socialinfo {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
}
#socialimg {
    margin: 0 15px;
}
#socialtitle {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 900;
    color: black;
}
#id {
    font-weight: 900;
}
#socialcontent {
    margin-top: 10px;
    font-size: 13px;
    font-weight: 500;
    color: grey;
}

#socialprice {
}

#available-btn {
    background-color: #57b17f;
    color: white;
    font-weight: 700;
    width: 190px;
    height: 40px;
    font-size: 14px;
}

#review-btn {
    justify-content: center;
    background-color: #558ccf;
    color: white;
    font-weight: 700;
    width: 120px;
    height: 40px;
}

#delete-btn {
    justify-content: center;
    background-color: black;
    color: white;
    font-weight: 700;
    width: 120px;
    height: 40px;
}
</style>
