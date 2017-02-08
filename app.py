import braintree

braintree.Configuration.configure(braintree.Environment.Sandbox,
                                  merchant_id="wytjqdykwy6f58xh",
                                  public_key="szxp49sq8cshvrq6",
                                  private_key="87f90788c3a951598efb7ee7e0ef99db")

@app.route("/client_token", methods=["GET"])
def client_token():
    return braintree.ClientToken.generate()

@app.route("/checkout", methods=["POST"])
def create_purchase():
    nonce_from_the_client = request.form["payment_method_nonce"]
    # Use payment method nonce here...
    
result = braintree.Transaction.sale({
    "amount": "10.00",
    "payment_method_nonce": nonce_from_the_client,
    "options": {
      "submit_for_settlement": True
    }
})
