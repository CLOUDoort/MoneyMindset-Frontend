import {atom} from 'jotai'

export const accessToken = atom('')
export const userEmail = atom('')
export const userIdx = atom(0)
export const userNickname = atom('')
export const userAsset = atom(0)
export const expenseLocation = atom({lat: 0, lng: 0})