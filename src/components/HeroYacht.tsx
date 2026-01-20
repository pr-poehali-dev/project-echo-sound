import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Icon from "@/components/ui/icon"

export function HeroYacht() {
  const [yachtType, setYachtType] = useState("all")

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/placeholder.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Аренда яхт в Калининграде
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Премиальный отдых на Балтийском море. Современный флот и профессиональный экипаж
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-4xl mx-auto"
        >
          <Tabs defaultValue="all" className="w-full" onValueChange={setYachtType}>
            <TabsList className="grid w-full grid-cols-3 mb-6 h-12 bg-gray-100">
              <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-white text-base">
                Все яхты
              </TabsTrigger>
              <TabsTrigger value="sailing" className="data-[state=active]:bg-primary data-[state=active]:text-white text-base">
                <Icon name="Sailboat" size={18} className="mr-2" />
                Парусные
              </TabsTrigger>
              <TabsTrigger value="motor" className="data-[state=active]:bg-primary data-[state=active]:text-white text-base">
                <Icon name="Ship" size={18} className="mr-2" />
                Моторные
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="space-y-2">
              <Label htmlFor="guests" className="text-gray-700 font-medium">
                Количество гостей
              </Label>
              <div className="relative">
                <Icon name="Users" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input
                  id="guests"
                  type="number"
                  placeholder="2-15 человек"
                  className="pl-10 h-12 border-gray-300"
                  min="1"
                  max="15"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date" className="text-gray-700 font-medium">
                Дата аренды
              </Label>
              <div className="relative">
                <Icon name="Calendar" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input
                  id="date"
                  type="date"
                  className="pl-10 h-12 border-gray-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration" className="text-gray-700 font-medium">
                Длительность
              </Label>
              <div className="relative">
                <Icon name="Clock" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input
                  id="duration"
                  type="number"
                  placeholder="Дней"
                  className="pl-10 h-12 border-gray-300"
                  min="1"
                />
              </div>
            </div>
          </div>

          <Button 
            size="lg" 
            className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90"
          >
            <Icon name="Search" size={20} className="mr-2" />
            Найти яхту
          </Button>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={16} className="text-primary" />
              <span>Страхование включено</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Award" size={16} className="text-primary" />
              <span>Опытный экипаж</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Percent" size={16} className="text-primary" />
              <span>Скидка 15% на первую аренду</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Icon name="ChevronDown" size={32} className="text-white/60" />
        </motion.div>
      </div>
    </section>
  )
}
