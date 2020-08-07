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
        async fetchData () {
            this.listLoading = true
            const { data } = await getList()
            this.list = data.data.items
            this.listLoading = false
        },
    },
}
</script>
