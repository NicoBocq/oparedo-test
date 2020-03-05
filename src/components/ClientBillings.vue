<template>
  <div>
    <q-table
      :rows-per-page-options="[0]"
      row-key="id"
      :data="billingsFiltered"
      :columns="columns"
      :selected-rows-label="getSelectedString"
      selection="multiple"
      :selected.sync="selected"
    >
    </q-table>
  </div>
</template>

<script>

import * as moment from 'moment'
import { mapGetters } from 'vuex'

export default {
  
  data () {
    return {
      selected: [],
      pagination: {
        rowsPerPage: 0
      },
      columns: [
        {
          name: 'date',
          label: 'Date',
          align: 'center',
          field: 'createdAt',
        },
        { 
          name: 'history',
          align: 'center',
          label: 'Historique',
          field: 'history',
          sortable: true
        },
        { 
          name: 'type',
          label: 'Type',
          field: 'type',
          sortable: true,
          align: 'center',
        },
        { 
          name: 'invoiceNumber',
          label: 'Numéro de facture',
          field: 'invoiceNumber',
          align: 'center',
        },
        { 
          name: 'contractNumber',
          label: 'Numéro de contrat',
          field: 'contractNumber',
          align: 'center',
        },
        { 
          name: 'debit',
          label: 'Débit',
          field: 'debit',
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
          align: 'center',
        },
        { 
          name: 'credit',
          label: 'Crédit',
          field: 'credit',
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
          align: 'center',
        },
        { 
          name: 'dueDate',
          label: "Date d'échéance",
          field: 'dueDate',
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
          align: 'center',
        },
        { 
          name: 'document',
          label: "Document",
          field: 'document',
          align: 'center',
        },
        { 
          name: 'lettering',
          label: "Lettrage",
          field: 'lettering',
          align: 'center',
        },
        { 
          name: 'recovery',
          label: "Recouvrement",
          field: 'recovery',
          align: 'center',
        },
        { 
          name: 'actions',
          label: "Actions",
          field: '',
          align: 'center',
        }
      ]
    }
  },
  filters: {
    moment(date) {
      return moment(date).format('Do MMMM YYYY');
    }
  },
  computed: {
    // ...mapState(['billings']),
    ...mapGetters([
      'billingsFiltered'
    ])
  },
  methods: {
    getSelectedString() {
      return this.selected.length === 0 ? '' : `${this.selected.length} record${this.selected.length > 1 ? 's' : ''} selected of ${this.data.length}`
    },
  },
  mounted() {
    
  },
}
</script>