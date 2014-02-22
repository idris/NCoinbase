var ApiMethods = {
  // Account Changes - https://coinbase.com/api/doc/1.0/account_changes.html
  account_changes: function (params, callback) {
    return this.get('account_changes', params, callback)
  },
  // Account - https://coinbase.com/api/doc/1.0/accounts.html
  account_balance: function (params, callback) {
    return this.get('account/balance', params, callback)
  },
  account_receive_address: function (params, callback) {
    return this.get('account/receive_address', params, callback)
  },
  account_generate_receive_address: function (callback) {
    return this.post('account/generate_receive_address', {}, callback)
  },
  // Addresses - https://coinbase.com/api/doc/1.0/addresses.html
  addresses: function (params, callback) {
    return this.get('addresses', params, callback)
  },
  // Buttons - https://coinbase.com/api/doc/1.0/buttons.html
  buttons: function (params, callback) {
    return this.get('buttons', params, callback)
  },
  // Buys - https://coinbase.com/api/doc/1.0/buys.html
  buy: function (quantity, callback) {
    return this.post('buys', {qty: quantity}, callback)
  },
  // Contacts - https://coinbase.com/api/doc/1.0/contacts.html
  contacts: function (params, callback) {
    return this.get('contacts', params, callback)
  },
  // Currencies - https://coinbase.com/api/doc/1.0/currencies.html
  currencies_list: function (params, callback) {
    return this.get('currencies', params, callback)
  },
  currencies_exchange_rates: function (params, callback) {
    return this.get('currencies/exchange_rates', params, callback)
  },
  // Orders - https://coinbase.com/api/doc/1.0/orders.html
  order_list: function (params, callback) {
    return this.get('orders', params, callback)
  },
  find_order: function (id, params, callback) {
    return this.get('orders/' + id, params, callback)
  },
  // Prices - https://coinbase.com/api/doc/1.0/prices.html
  prices_buy: function (params, callback) {
    return this.get('prices/buy', params, callback)
  },
  prices_sell: function (params, callback) {
    return this.get('prices/sell', params, callback)
  },
  prices_spot_rate: function (params, callback) {
    return this.get('prices/spot_rate', params, callback)
  },
  // Recurring Payments - https://coinbase.com/api/doc/1.0/recurring_payments.html
  recurring_payments_list: function (params, callback) {
    return this.get('recurring_payments', params, callback)
  },
  find_recurring_payment: function (id, params, callback) {
    return this.get('recurring_payments/' + id, params, callback)
  },
  // Sell - https://coinbase.com/api/doc/1.0/sell.html
  sell: function (quantity, callback) {
    return this.post('sells', {qty: quantity}, callback)
  },
  // Subscribers - https://coinbase.com/api/doc/1.0/subscribers.html
  subscribers_list: function (params, callback) {
    return this.get('subscribers', params, callback)
  },
  find_subscriber: function (id, params, callback) {
    return this.get('subscribers/' + id, params, callback)
  },
  // Transactions - https://coinbase.com/api/doc/1.0/transactions.html
  transactions_list: function (params, callback) {
    return this.get('transactions', params, callback)
  },
  find_transaction: function (id, params, callback) {
    return this.get('transactions/' + id, params, callback)
  },
  transaction_send_money: function (to, amount, notes, callback) {
    var data = {
      to: to,
      amount: amount,
      notes: notes || ''
    }
    return this.post('transactions/send_money', data, callback)
  },
  transaction_request_money: function (from, amount, notes, callback) {
    var data = {
      to: from,
      amount: amount,
      notes: notes || ''
    }
    return this.post('transactions/request_money', data, callback)
  },
  transaction_resend_request: function (id, callback) {
    return this.put('transactions/'+id+'/resend_request', {}, callback)
  },
  transaction_cancel_request: function (id, callback) {
    return this.del('transactions/'+id+'/cancel_request', {}, callback)
  },
  transaction_complete_request: function (id, callback) {
    return this.put('transactions/'+id+'/complete_request', {}, callback)
  },
  // Transfers - https://coinbase.com/api/doc/1.0/transfers.html
  transfer_list: function (params, callback) {
    return this.get('transfers', params, callback)
  },
  // Users - https://coinbase.com/api/doc/1.0/users.html
  user_list: function (params, callback) {
    return this.get('users', params, callback)
  },
  create_user: function (email, password, callback) {
    var data = {
      email: email,
      password: password
    };
    return this.post('users', data, callback)
  },
  update_user: function (id, attrs, callback) {
    return this.put('users/'+id, attrs, callback)
  }
}

module.exports = ApiMethods;
