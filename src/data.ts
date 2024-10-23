import lord from '@/assets/img/lord.jpeg'
import vvip from '@/assets/img/vvip.jpeg'
import vip from '@/assets/img/vip.jpeg'

export interface Item {
  title: string
  color: string
  img: string
  benefits: string[]
  type: string
  price: number
}

export const data_list: Item[] = [{
  title: '[LORD]',
  color: 'text-red-700',
  img: lord,
  benefits: [
    'Special Tag',
    'Top Priority Queue',
    'Pets, Suite, Particle Effect',
    '/UC in Lobby',
    'No Teleport Cooldown',
    'Max Claim Block 30K',
    '4 Jobs Selection',
    '4 Set Home',
    'Discord Survival Server Chat'
  ],
  type: 'LORD',
  price: 50000
}, {
  title: '[VVIP]',
  color: 'text-orange-400',
  img: vvip,
  benefits: [
    'Special Tag',
    'Top Priority Queue',
    'Pets, Suite, Particle Effect',
    '/UC in Lobby',
    '2 Minutes Teleport Cooldown',
    'Max Claim Block 20K',
    '3 Jobs Selection',
    '3 Set Home',
    'Discord Survival Server Chat'
  ],
  type: 'VVIP',
  price: 38000
}, {
  title: '[VIP]',
  color: 'text-yellow-400',
  img: vip,
  benefits: [
    'Special Tag',
    'Top Priority Queue',
    '/UC in Lobby',
    'No Teleport Cooldown',
    'Max Claim Block 15K',
    '2 Jobs Selection',
    '2 Set Home',
    'Discord Survival Server Chat'
  ],
  type: 'VIP',
  price: 25000
}]