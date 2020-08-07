<template>
    <div>
        我是table
        {{list}}
    </div>
</template>
<script>
import { getList } from '@/api/table'

export default {
    data () {
        return {
            list: null,
            listLoading: true,
        }
    },
    created () {
        this.fetchData()
    },
    methods: {
        fetchData () {
            this.listLoading = true
            getList().then(res => {
                this.list = res.data.data.items
                this.listLoading = false
            })
        },
    },
}
</script>
