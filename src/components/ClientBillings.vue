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
      class="my-sticky-header-table"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-checkbox v-if="!props.row['lettering']" color="primary" v-model="props.selected"/>
          </q-td>
          <q-td key="createdAt" :props="props">
              {{ props.row.createdAt | formatDate }}
          </q-td>
          <q-td key="type" :props="props">
              {{ props.row.type }}
          </q-td>
          <q-td key="history" :props="props">
            <q-icon name="info" class="text-body1 text-grey" />
          </q-td>
          <q-td key="invoiceNumber" :props="props">
            {{ props.row.invoiceNumber }}
          </q-td>
          <q-td key="contractNumber" :props="props">
            {{ props.row.contractNumber }}
          </q-td>
          <q-td key="debit" :props="props">
            {{ props.row.debit }}
          </q-td>
          <q-td key="credit" :props="props">
            {{ props.row.credit }}
          </q-td>
          <q-td key="dueDate" :props="props">
            <template v-if="props.row.dueDate">
              {{ props.row.dueDate | formatDate }}
            </template>
          </q-td>
          <q-td key="document" :props="props">
            <q-icon name="attachment" class="text-body1 text-grey" />
          </q-td>
          <q-td key="lettering" :props="props">
            <q-chip square dark v-if="props.row.lettering" class="bg-info">
              {{ props.row.lettering }}
            </q-chip>
          </q-td>
          <q-td key="recovery" :props="props">
            <q-chip square dark v-if="props.row.recovery === 'Soldée'" class="bg-positive">
              {{ props.row.recovery }}
            </q-chip>
            <q-chip square dark v-if="props.row.recovery === 'Non-échu'" class="bg-grey">
              {{ props.row.recovery }}
            </q-chip>
          </q-td>
          <q-td key="actions" :props="props">
            <q-icon name="more_vert" class="text-body1 text-grey" />
          </q-td>
        </q-tr>
      </template>
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
  filters: {
    formatDate(date) {
      return moment(date).format('D/M/YYYY');
    }
  },
  data () {
    return {
      selected: [],
      pagination: {
        rowsPerPage: 50,
        sortBy: 'createdAt',
        descending: true,
      },
      columns: [
        {
          name: 'createdAt',
          required: true,
          label: 'Date',
          align: 'center',
          field: row => row.createdAt,
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
          name: 'history',
          align: 'center',
          label: 'Historique',
          field: 'history',
          sortable: true
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
        { 
          name: 'dueDate',
          label: "Date d'échéance",
          field: 'dueDate',
          sortable: true,
          align: 'center',
        },
        { 
          name: 'document',
          label: "Document",
          field: 'document',
          align: 'center',
          sortable: true,
        },
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
}
</script>