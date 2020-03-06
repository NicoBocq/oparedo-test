<template>
  <div>
    <q-table
      :rows-per-page-options="[0]"
      row-key="id"
      :data="billingsFiltered"
      :columns="columns"
      selection="multiple"
      :selected.sync="selected"
      :pagination.sync="pagination"
    >
    </q-table>
    <BillingReconcialiation
      :selected.sync="selected"
      key="billing-reconciliation"
    />
  </div>
</template>

<script>

import * as moment from 'moment'
import { mapGetters } from 'vuex'
import BillingReconcialiation from '@/components/BillingReconcialiation'

export default {
  components: {
    BillingReconcialiation
  },
  data () {
    return {
      selected: [],
      pagination: {
        rowsPerPage: 50,
        sortBy: 'date',
        descending: true,
        order: 'desc',
      },
      columns: [
        {
          name: 'date',
          required: true,
          label: 'Date',
          align: 'left',
          field: row => row.createdAt,
          format: val => moment(val).format('D/M/YYYY'),
          sortable: true
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
  computed: {
    ...mapGetters([
      'billingsFiltered', 'selectedBilling'
    ]),
  },
  methods: {
    // getSelectedString() {
    //   return this.selected.length === 0 ? '' : `${this.selected.length} record${this.selected.length > 1 ? 's' : ''} selected of ${this.data.length}`
    // },
  }
}
</script>