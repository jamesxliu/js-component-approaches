<template>
    <div class="testComponent3">
        <h3 :class="$style.heading">{{componentHeading}}</h3>
        <p :class="$style.text">{{componentText}}</p>
        <Table :class="$style.table" v-bind:tabledata="tabledata"></Table>
    </div>
</template>

<script>
    import Table from './Table';
    import namor from "namor";

    const range = len => {
        const arr = [];
        for (let i = 0; i < len; i++) {
            arr.push(i);
        }
        return arr;
    };

    const datum = () => {
        return {
            uid: namor.generate({words:1, numbers: 8}),
            label: namor.generate({ words: 1, numbers: 0 }),
            duration: Math.floor(Math.random() * 10000)
        };
    };

    const makeData = (len = 20) => (
        range(len).map(datum)
    );

    export default {
        props: ['componentHeading', 'componentText'],
        components: {
            'Table': Table
        },
        computed: {
            tabledata: function() {
                return makeData()
            }
        }
    }
</script>

<style module lang="scss">
    .heading,
    .text {
        font-family: monospace;
    }

    .table {
        border: 1px solid;
        border-collapse: collapse;

        td, th {
            border: 1px solid;
            padding: 5px;
            font-family: monospace;
            background-color: darkred;
            color: white;
        }
    }
</style>