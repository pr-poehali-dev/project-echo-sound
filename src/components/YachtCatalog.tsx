import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const sailingYachts = [
  {
    id: 1,
    name: "Балтийская Мечта",
    type: "Парусная яхта",
    length: "12 метров",
    capacity: "8 человек",
    price: "от 25 000 ₽/день",
    description: "Классическая парусная яхта для романтических круизов. Идеально подходит для семейного отдыха и небольших компаний.",
    features: ["Каюты: 3", "Санузел", "Кухня", "GPS навигация"],
    image: "/placeholder.jpg"
  },
  {
    id: 2,
    name: "Морской Странник",
    type: "Парусная яхта",
    length: "14 метров",
    capacity: "10 человек",
    price: "от 35 000 ₽/день",
    description: "Просторная яхта премиум-класса с отличными ходовыми качествами. Современное оборудование и комфортабельные каюты.",
    features: ["Каюты: 4", "2 санузла", "Салон", "Автопилот"],
    image: "/placeholder.jpg"
  },
  {
    id: 3,
    name: "Ветер Свободы",
    type: "Парусная яхта",
    length: "10 метров",
    capacity: "6 человек",
    price: "от 18 000 ₽/день",
    description: "Компактная и маневренная яхта для активного отдыха. Отлично подходит для обучения парусному спорту.",
    features: ["Каюты: 2", "Санузел", "Солнечная палуба", "Стерео система"],
    image: "/placeholder.jpg"
  },
  {
    id: 4,
    name: "Королева Волн",
    type: "Парусная яхта",
    length: "16 метров",
    capacity: "12 человек",
    price: "от 45 000 ₽/день",
    description: "Роскошная яхта для корпоративных мероприятий и торжеств. Премиальный уровень комфорта и сервиса.",
    features: ["Каюты: 5", "3 санузла", "Бар", "Кондиционер"],
    image: "/placeholder.jpg"
  },
  {
    id: 5,
    name: "Адмирал",
    type: "Парусная яхта",
    length: "13 метров",
    capacity: "9 человек",
    price: "от 30 000 ₽/день",
    description: "Универсальная яхта для дальних походов. Надежная и комфортная, с большими запасами провизии и воды.",
    features: ["Каюты: 3", "2 санузла", "Камбуз", "Рация VHF"],
    image: "/placeholder.jpg"
  }
]

const motorYachts = [
  {
    id: 6,
    name: "Скорость Света",
    type: "Моторная яхта",
    length: "11 метров",
    capacity: "8 человек",
    price: "от 40 000 ₽/день",
    description: "Быстроходная моторная яхта для динамичного отдыха. Мощные двигатели и современный дизайн.",
    features: ["Каюты: 2", "Санузел", "Флайбридж", "Скорость 35 узлов"],
    image: "/placeholder.jpg"
  },
  {
    id: 7,
    name: "Премиум Класс",
    type: "Моторная яхта",
    length: "15 метров",
    capacity: "12 человек",
    price: "от 60 000 ₽/день",
    description: "Роскошная моторная яхта с панорамными окнами. VIP-уровень для самых взыскательных клиентов.",
    features: ["Каюты: 4", "3 санузла", "Джакузи", "Стабилизаторы"],
    image: "/placeholder.jpg"
  },
  {
    id: 8,
    name: "Морской Бриз",
    type: "Моторная яхта",
    length: "9 метров",
    capacity: "6 человек",
    price: "от 28 000 ₽/день",
    description: "Комфортабельный катер для прогулок и рыбалки. Экономичный расход топлива, отличная управляемость.",
    features: ["Каюта: 1", "Санузел", "Рыболовное снаряжение", "Эхолот"],
    image: "/placeholder.jpg"
  },
  {
    id: 9,
    name: "Океанский Лайнер",
    type: "Моторная яхта",
    length: "18 метров",
    capacity: "15 человек",
    price: "от 80 000 ₽/день",
    description: "Флагман нашего флота. Идеальна для масштабных мероприятий, свадеб и корпоративов на воде.",
    features: ["Каюты: 6", "4 санузла", "Салон 40м²", "Тендер"],
    image: "/placeholder.jpg"
  },
  {
    id: 10,
    name: "Спортивный Дух",
    type: "Моторная яхта",
    length: "12 метров",
    capacity: "8 человек",
    price: "от 45 000 ₽/день",
    description: "Спортивный катер с мощными двигателями. Для любителей скорости и водных видов спорта.",
    features: ["Каюты: 2", "Санузел", "Водные лыжи", "Вейкборд"],
    image: "/placeholder.jpg"
  }
]

export function YachtCatalog() {
  const [activeTab, setActiveTab] = useState("sailing")

  const renderYachtCard = (yacht: typeof sailingYachts[0]) => (
    <motion.div
      key={yacht.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors overflow-hidden">
        <div className="relative h-64 overflow-hidden">
          <img
            src={yacht.image}
            alt={yacht.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-zinc-900/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <span className="text-white font-medium text-sm">{yacht.price}</span>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-white text-xl">{yacht.name}</CardTitle>
          <CardDescription className="text-zinc-400">
            {yacht.type} • {yacht.length} • до {yacht.capacity}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-zinc-300 mb-4">{yacht.description}</p>
          <div className="grid grid-cols-2 gap-2">
            {yacht.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-zinc-400 text-sm">
                <Icon name="Check" size={16} className="text-blue-500 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex gap-3">
          <Button className="flex-1 bg-white text-zinc-900 hover:bg-zinc-100">
            <Icon name="Calendar" size={16} className="mr-2" />
            Забронировать
          </Button>
          <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
            <Icon name="Send" size={16} />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )

  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-white mb-4">
            Наш флот
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Выберите идеальную яхту для вашего путешествия по Балтийскому морю
          </p>
        </motion.div>

        <Tabs defaultValue="sailing" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-zinc-900/50 border border-zinc-800">
            <TabsTrigger value="sailing" className="data-[state=active]:bg-white data-[state=active]:text-zinc-900">
              <Icon name="Sailboat" size={18} className="mr-2" />
              Парусные яхты
            </TabsTrigger>
            <TabsTrigger value="motor" className="data-[state=active]:bg-white data-[state=active]:text-zinc-900">
              <Icon name="Ship" size={18} className="mr-2" />
              Моторные яхты
            </TabsTrigger>
          </TabsList>

          <TabsContent value="sailing" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sailingYachts.map(renderYachtCard)}
            </div>
          </TabsContent>

          <TabsContent value="motor" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {motorYachts.map(renderYachtCard)}
            </div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <Button 
            size="lg" 
            className="bg-[#0088cc] hover:bg-[#006699] text-white px-8"
            onClick={() => window.open('https://t.me/your_bot', '_blank')}
          >
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Написать в Telegram
          </Button>
          <p className="text-zinc-500 text-sm mt-3">
            Наши специалисты помогут подобрать яхту и ответят на все вопросы
          </p>
        </motion.div>
      </div>
    </section>
  )
}
