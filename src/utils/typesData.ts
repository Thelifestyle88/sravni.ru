export type TUser = {
  address: TAddress,
  company: TCompany,
  email: string,
  id: number,
  name: string,
  phone: string
  username: string
  website: string
}

export type TAddress = {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: TGeo
}

export type TGeo = {
  lat: string,
  lng: string
}

export type TCompany = {
  bs: string,
  catchPhrase: string,
  name: string
}

export type TPhotos = {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}