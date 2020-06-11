## Sean O'Dell 05/27/2020
## Speaker: AJ Willioams, Stripe

## STRIPE

**Stripe - online payment service; all-in-one payment processor (online/in-person)
- Mission:
- Value proposition: simplify and streamline online payments

launched 2009, public in 2011
by 2019, 85% americans have used Stripe for online purchase

**Stripe Atlas - helps entities organize as business in America, possible

## Billing

can handle periodic payments and one time, periodic covers both, shows 

funds from customers pay into placeholder-stripe-account, then user is able to transfer to specific account, usually personal bank account *Can't use that money to make purchases directly from stripe account*

ex- Lyft - makes individual accounts for specific drivers, payments go into those sub-accounts and then transfered into driver's personal bank account

can set pages to be local specific, to show currencies, payment types, and language specific to different countries

can track billing data accessible to owners using SQL, allows for data analyst/marketing decisions. also tracks invoices and reciepts

customized invoices (logo, payment methods, contact info, language), increase branding ability and ease-of-use for customers

## Connect

can create sub-accounts connected to main account (see Lyft example)
allows transfer to other connected Stripe accounts (employees/contractors)

?can connect to pre-existing stripe accounts for contractors and other corporate structure?
a:can do so with standard connect stripe account access, employees usually with use express due to ease of use and limited information. tranferring back and forth requires setting up new accounts

## Payment

payment pages offer dynamic display with no additional integration requirements for additional payment types

offers 3D verification for high-risk payments or when required by cardholder's provider

localized checkout for currencies and card providers

?support for currency exchange, or does localized checkout require specific accounts to handle currencies?