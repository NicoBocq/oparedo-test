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
      <!-- <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-checkbox v-if="props.row['recovery']!='Soldée'" color="primary" v-model="props.selected"/>
          </q-td>
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ props.row[col.field] }}
          </q-td>
        </q-tr>
      </template> -->
    </q-table>
    <BillingReconcialiation
      :selected.sync="selected"
      key="billing-reconciliation"
      v-if="selectedBilling"
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
      },
      columns: [
        {
          name: 'date',
          required: true,
          label: 'Date',
          align: 'center',
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
          sortable: true,
        },
        { 
          name: 'contractNumber',
          label: 'Numéro de contrat',
          field: 'contractNumber',
          align: 'center',
          sortable: true,
        },
        { 
          name: 'debit',
          label: 'Débit',
          field: 'debit',
          sortable: true,
          align: 'center',
        },
        { 
          name: 'credit',
          label: 'Crédit',
          field: 'credit',
          sortable: true,
          align: 'center',
        },
        // { 
        //   name: 'dueDate',
        //   label: "Date d'échéance",
        //   field: 'dueDate',
        //   sortable: true,
        //   align: 'center',
        //   format: val => moment(val).format('D/M/YYYY'),
        // },
        // { 
        //   name: 'document',
        //   label: "Document",
        //   field: 'document',
        //   align: 'center',
        //   sortable: true,
        // },
        { 
          name: 'lettering',
          label: "Lettrage",
          field: 'lettering',
          align: 'center',
          sortable: true,
        },
        { 
          name: 'recovery',
          label: "Recouvrement",
          field: 'recovery',
          align: 'center',
          sortable: true,
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
    //   return this.selected.length === 0 ? '' : `${this.selected.length} élément${this.selected.length > 1 ? 's' : ''} sélectionné sur ${this.data.length}`
    // },
  }
}
</script>