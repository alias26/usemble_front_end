<template>
    <div>
        <div class="mb-4 d-flex">
            <div class="fs-4 fw-bold"><span class="highlight">비밀번호 변경</span></div>
            <div class="fs-4">하기</div>
        </div>

        <div class="input-group mb-2">
            <input
                type="password"
                id="form-input"
                class="form-control p-2"
                placeholder="비밀번호 (8자 이상)"
            />
        </div>

        <div class="input-group">
            <input
                type="password"
                id="form-input"
                class="form-control p-2"
                placeholder="비밀번호 재입력"
            />
        </div>
        <div class="mt-3 text-end">
            <button class="btn" id="update-btn">
                <strong>변경하기</strong>
            </button>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
.highlight {
    display: inline;
    box-shadow: inset 0 -10px 0 #57b17f;
}

input::placeholder {
    text-align: start;
    color: #a29e9a;
    font-size: 14px;
    width: 100%;
    overflow-wrap: break-word;
}

#update-btn {
    justify-content: center;
    background-color: #558ccf;
    border: none;
    color: white;
    font-weight: bolder;
    width: 120px;
    height: 40px;
    font-size: 15px;
}
</style>
