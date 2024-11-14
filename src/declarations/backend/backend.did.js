export const idlFactory = ({ IDL }) => {
  const Brand = IDL.Record({
    'features' : IDL.Vec(IDL.Text),
    'websiteUrl' : IDL.Text,
    'name' : IDL.Text,
    'description' : IDL.Text,
    'keyProduct' : IDL.Text,
    'imageUrl' : IDL.Text,
    'logoUrl' : IDL.Text,
  });
  const ContactForm = IDL.Record({
    'name' : IDL.Text,
    'email' : IDL.Text,
    'message' : IDL.Text,
  });
  return IDL.Service({
    'getBrands' : IDL.Func([], [IDL.Vec(Brand)], ['query']),
    'submitContact' : IDL.Func([ContactForm], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
