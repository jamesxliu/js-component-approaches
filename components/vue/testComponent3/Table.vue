<template>
    <table>
        <thead>
            <th v-for="heading in headings">
                {{heading}}
            </th>
        </thead>
        <tbody>
            <tr v-for="rowValues in rows">
                <td v-for="rowValue in rowValues">
                    {{rowValue}}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        props: ['tabledata'],
        computed: {
            headings: function() {
                return Object.keys(this.tabledata[0])
            },
            rows: function() {
                return this.tabledata.map((datum) => (Object.values(datum)))
            }
        }
    }
</script>