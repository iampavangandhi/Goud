# GOUD - Hackathon Model
## Virtual Adoption System

## Login:- **Donor,** **Orphanage/NGOs**

## Dashboards:- **Donor,** **Orphanage/NGOs**

## Pages:- **LandingPage,** **DonorDashboard,** **OrphanageDashBoard,** **PaymentPage**

### Orphanage Database Schema.

- Orphanage name
- Owner/manager name
- Location
- Established Year
- No. of kids
- Phone/Mobile/Email
- Orphanage Photo (not-required)
- Description (not-required)

### Orphanage Adds Kids (KidsSchema).

- Unique ID
- isDonated="false"

- Name
- Age
- Class
- Photo
- Description (not-required e.g. if any disease etc)

*Then PhoneNo for chat and call (only that donor who is donating)*

### Donor Database Schema.

- Donor Name
- Location
- Age
- Annual Income, (in slab like 8lac-10lac)
- Phone/Mobile/Email,
- Donor Photo (not-required)

*After that when he donate we have to link him with the
particular kid database, also kids have a unique id.
and after that isDonated = "true".
Notifications via email to the donor.*



