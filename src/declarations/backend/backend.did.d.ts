import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Brand {
  'features' : Array<string>,
  'websiteUrl' : string,
  'name' : string,
  'description' : string,
  'keyProduct' : string,
  'imageUrl' : string,
  'logoUrl' : string,
}
export interface ContactForm {
  'name' : string,
  'email' : string,
  'message' : string,
}
export interface _SERVICE {
  'getBrands' : ActorMethod<[], Array<Brand>>,
  'submitContact' : ActorMethod<[ContactForm], undefined>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
