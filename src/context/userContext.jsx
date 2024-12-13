import { createContext, useState } from "react";

const UserContext = createContext({
  user: {},
  setUser: () => {},
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    // id: 90000,
    // firstName: 'Benjamin',
    // lastName: 'D0e',
    // legalName: 'Benjamin D0e',
    // dob: '1963-04-22',
    emails: [{ id: 90000, typeId: 1, email: "iklas@oneadvisory.co" }],
    phones: [{ id: 90000, typeId: 3, countryCodeID: 1, number: "1112223344" }],
    maritalStatusId: 1,
    employment: {
      employer: "Bank of America",
      position: "Teller",
      yearsEmployedId: 3,
      street1: "35025 Garret Pine",
      city: "North Rowenaville",
      stateId: 5,
      postalCode: "90066",
    },
    addresses: [
      {
        id: 90000,
        typeId: 1,
        street1: "79029 Corene Meadow",
        city: "Homenickfurt",
        stateId: 5,
        postalCode: "90066",
        countryId: 1,
      },
    ],
    finProfile: {
      doesBackupWithholdingApply: false,
      federalTaxBracketPercent: 28.3,
      annualIncomeId: 1,
      liquidNetWorthId: 3,
      totalNetWorthId: 3,
    },
    disclosures: {
      isAffiliatedExchangeOrFinra: false,
      isPoliticallyExposed: false,
      isControlPerson: false,
    },
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
