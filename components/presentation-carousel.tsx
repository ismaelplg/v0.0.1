"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

/* eslint-disable @typescript-eslint/no-explicit-any */
const slides: Array<{ id: number; type: string; content: any }> = [
  {
    id: 1,
    type: "title",
    content: {
      title: "WirebitApp",
      version: "v0.0.1",
      dates: "Jan 21 - Jan 30, 2026",
      teamLead: "Ezequiel",
    },
  },
  {
    id: 2,
    type: "gantt",
    content: {
      title: "Timeline",
      columns: 8,
      tasks: [
        { name: "Pantalla Market", start: 0, span: 1, hours: "8h" },
        { name: "Pantalla Assets", start: 1, span: 1, hours: "4h" },
        { name: "Optimizar Enviar/Recibir", start: 2, span: 4, hours: "16h" },
        { name: "Limites de retiro", start: 6, span: 1, hours: "4h" },
        { name: "Añadir boton sign out", start: 6, span: 2, hours: "32h" },
      ],
    },
  },
  {
    id: 3,
    type: "tasks",
    content: {
      title: "Tasks",
      tasks: [
        { name: "Pantalla Market", hours: "8h", owner: "Ezequiel", status: "pending" },
        { name: "Pantalla Assets", hours: "4h", owner: "Ezequiel", status: "pending" },
        { name: "Optimizar Enviar/Recibir", hours: "16h", owner: "Ezequiel", status: "pending" },
        { name: "Limites de retiro (minimo)", hours: "4h", owner: "Ezequiel", status: "pending" },
        { name: "Añadir boton de sign out", hours: "32h", owner: "Ezequiel", status: "pending" },
      ],
      total: { days: "8 days", hours: "64h" },
    },
  },
  {
    id: 4,
    type: "milestones",
    content: {
      title: "Milestones",
      items: [
        { label: "Despliegue de pagina web", date: "Lunes 26 de enero" },
        { label: "Despliegue de aplicacion a Test Flight", date: "Lunes 26 de enero" },
        { label: "Grupo alpha try out", date: "Lunes 2 de febrero" },
      ],
    },
  },
  
  {
    id: 5,
    type: "swapping",
    content: {
      title: "Swapping",
      subtitle: "Cripto a Cripto",
      description: "Intercambio directo entre criptomonedas sin necesidad de convertir a fiat. Soporte para los principales tokens y las mejores tasas del mercado.",
      features: [
        "Intercambio instantaneo entre tokens",
        "Sin conversion a moneda fiat",
        "Mejores tasas del mercado",
        "Soporte multi-chain",
      ],
      deployDate: "Primera semana de Febrero 2026",
    },
  },
  {
    id: 6,
    type: "tesoreria",
    content: {
      title: "Tesorería",
      subtitle: "Liquidez y Activos Virtuales",
      description: "Gestión integral de liquidez y activos virtuales. Control total sobre reservas, pools de liquidez y balances en tiempo real.",
      features: [
        "Gestión de pools de liquidez",
        "Control de reservas en tiempo real",
        "Balances de activos virtuales",
        "Reportes de tesorería automatizados",
      ],
      deployDate: "Primera semana de Febrero 2026",
    },
  },
  {
    id: 7,
    type: "roadmap",
    content: {
      title: "Roadmap",
      subtitle: "Próximos pasos a desarrollar",
      milestones: [
        { label: "Salida Beta en AppStore", date: "28 de Febrero 2026", status: "upcoming" },
      ],
    },
  },
  {
    id: 8,
    type: "nextsteps",
    content: {
      title: "Next Steps",
      subtitle: "Expansión de funcionalidades",
      description: "Nuevas características planificadas para las próximas versiones de WirebitApp.",
      features: [
        { name: "Módulo de tarjetas", quarter: "Q2 2026" },
        { name: "Pago de servicios", quarter: "Q3 2026" },
        { name: "Compra de cripto con crédito", quarter: "Q3 2026" },
        { name: "FX Coin Trading Desk", quarter: "Q4 2026" },
      ],
    },
  },
]

export function PresentationCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const slide = slides[currentSlide]

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-2 sm:p-4 md:p-8">
      <div className="relative w-full max-w-4xl px-8 sm:px-10 md:px-0">
        {/* Slide Container */}
        <div className="aspect-[3/4] sm:aspect-[4/3] md:aspect-[16/9] w-full overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-card shadow-lg">
          <div className="flex h-full flex-col items-center justify-center overflow-y-auto p-4 sm:p-6 md:p-16">
            {slide.type === "title" && (
              <div className="text-center">
                <img
                  src="/wirebit.webp"
                  alt="Wirebit Logo"
                  className="mx-auto mb-4 sm:mb-6 h-16 sm:h-20 md:h-28 w-auto"
                />
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                  {slide.content.title}
                </h1>
                <p className="mt-2 sm:mt-4 font-mono text-lg sm:text-xl md:text-2xl text-primary">
                  {slide.content.version}
                </p>
                <div className="mt-4 sm:mt-8 flex flex-col gap-1 sm:gap-2 text-muted-foreground">
                  <p className="text-xs sm:text-sm md:text-base">{slide.content.dates}</p>
                  <p className="text-xs sm:text-sm md:text-base">
                    Team Lead: <span className="font-medium text-foreground">{slide.content.teamLead}</span>
                  </p>
                </div>
              </div>
            )}

            {slide.type === "gantt" && (
              <div className="w-full">
                <h2 className="mb-3 sm:mb-6 text-center text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
                  {slide.content.title}
                </h2>
                <div className="overflow-x-auto -mx-2 px-2">
                  <div className="min-w-[400px] sm:min-w-[600px]">
                    {/* Tasks */}
                    <div className="space-y-1 sm:space-y-2">
                      {slide.content.tasks.map(
                        (
                          task: { name: string; start: number; span: number; hours: string },
                          index: number
                        ) => {
                          const columns = slide.content.columns as number

                          return (
                            <div key={index} className="flex items-center">
                              <div className="w-24 sm:w-40 shrink-0 truncate pr-2 sm:pr-3 text-[10px] sm:text-xs md:text-sm text-foreground">
                                {task.name}
                              </div>
                              <div className="relative flex flex-1">
                                {Array.from({ length: columns }).map((_, colIndex) => {
                                  const isInRange =
                                    colIndex >= task.start && colIndex < task.start + task.span
                                  const isStart = colIndex === task.start
                                  const isEnd = colIndex === task.start + task.span - 1

                                  return (
                                    <div
                                      key={colIndex}
                                      className="relative flex h-5 sm:h-7 flex-1 items-center border-l border-border/30 last:border-r"
                                    >
                                      {isInRange && (
                                        <div
                                          className={`absolute inset-y-1 left-0.5 right-0.5 bg-primary ${
                                            isStart ? "rounded-l" : ""
                                          } ${isEnd ? "rounded-r" : ""}`}
                                        />
                                      )}
                                    </div>
                                  )
                                })}
                              </div>
                              <div className="w-8 sm:w-12 shrink-0 pl-1 sm:pl-2 text-right font-mono text-[10px] sm:text-xs text-muted-foreground">
                                {task.hours}
                              </div>
                            </div>
                          )
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {slide.type === "tasks" && (
              <div className="w-full">
                <h2 className="mb-3 sm:mb-6 text-center text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
                  {slide.content.title}
                </h2>
                <div className="space-y-1.5 sm:space-y-3">
                  {slide.content.tasks.map((task: { name: string; hours: string; status: string }, index: number) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-lg bg-muted/50 px-2 sm:px-4 py-2 sm:py-3"
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] sm:text-xs text-primary-foreground">
                          {index + 1}
                        </span>
                        <span className="text-xs sm:text-sm md:text-base text-foreground">{task.name}</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-4">
                        <span className="font-mono text-[10px] sm:text-xs md:text-sm text-muted-foreground">{task.hours}</span>
                        <span
                          className={`h-2 w-2 shrink-0 rounded-full ${
                            task.status === "done"
                              ? "bg-green-500"
                              : task.status === "active"
                                ? "bg-yellow-500"
                                : "bg-muted-foreground/30"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 sm:mt-6 flex justify-end border-t border-border pt-2 sm:pt-4">
                  <div className="font-mono text-xs sm:text-sm text-muted-foreground">
                    Total: <span className="text-foreground">{slide.content.total.days}</span> /{" "}
                    <span className="text-foreground">{slide.content.total.hours}</span>
                  </div>
                </div>
              </div>
            )}

            {slide.type === "milestones" && (
              <div className="w-full max-w-lg">
                <h2 className="mb-4 sm:mb-10 text-center text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
                  {slide.content.title}
                </h2>
                <div className="relative space-y-4 sm:space-y-8">
                  {/* Vertical line */}
                  <div className="absolute bottom-4 left-2.5 sm:left-3 top-4 w-px bg-primary/30" />
                  {slide.content.items.map(
                    (item: { label: string; date: string }, index: number) => (
                      <div key={index} className="relative flex items-start gap-3 sm:gap-6">
                        <div className="relative z-10 flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background">
                          <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary" />
                        </div>
                        <div className="flex-1 pt-0">
                          <p className="text-xs sm:text-sm md:text-base font-medium text-foreground">
                            {item.label}
                          </p>
                          <p className="mt-0.5 sm:mt-1 font-mono text-[10px] sm:text-xs text-muted-foreground">
                            {item.date}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {slide.type === "swapping" && (
              <div className="w-full max-w-lg text-center">
                <h2 className="mb-1 sm:mb-2 text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
                  {slide.content.title}
                </h2>
                <p className="mb-2 sm:mb-4 font-mono text-sm sm:text-lg md:text-xl text-primary">
                  {slide.content.subtitle}
                </p>
                <p className="mb-3 sm:mb-6 text-xs sm:text-sm md:text-base text-muted-foreground">
                  {slide.content.description}
                </p>
                <div className="mb-3 sm:mb-6 space-y-1.5 sm:space-y-2">
                  {slide.content.features.map((feature: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 sm:gap-3 rounded-lg bg-muted/50 px-2 sm:px-4 py-1.5 sm:py-2"
                    >
                      <span className="flex h-4 w-4 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] sm:text-xs text-primary-foreground">
                        {index + 1}
                      </span>
                      <span className="text-xs sm:text-sm text-foreground text-left">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-lg border border-primary/30 bg-primary/5 px-3 sm:px-4 py-1.5 sm:py-2">
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Deploy estimado</p>
                  <p className="font-mono text-xs sm:text-sm font-medium text-foreground">
                    {slide.content.deployDate}
                  </p>
                </div>
              </div>
            )}

            {slide.type === "tesoreria" && (
              <div className="w-full max-w-lg text-center">
                <h2 className="mb-1 sm:mb-2 text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
                  {slide.content.title}
                </h2>
                <p className="mb-2 sm:mb-4 font-mono text-sm sm:text-lg md:text-xl text-primary">
                  {slide.content.subtitle}
                </p>
                <p className="mb-3 sm:mb-6 text-xs sm:text-sm md:text-base text-muted-foreground">
                  {slide.content.description}
                </p>
                <div className="mb-3 sm:mb-6 space-y-1.5 sm:space-y-2">
                  {slide.content.features.map((feature: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 sm:gap-3 rounded-lg bg-muted/50 px-2 sm:px-4 py-1.5 sm:py-2"
                    >
                      <span className="flex h-4 w-4 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] sm:text-xs text-primary-foreground">
                        {index + 1}
                      </span>
                      <span className="text-xs sm:text-sm text-foreground text-left">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-lg border border-primary/30 bg-primary/5 px-3 sm:px-4 py-1.5 sm:py-2">
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Deploy estimado</p>
                  <p className="font-mono text-xs sm:text-sm font-medium text-foreground">
                    {slide.content.deployDate}
                  </p>
                </div>
              </div>
            )}

            {slide.type === "roadmap" && (
              <div className="w-full max-w-lg text-center">
                <h2 className="mb-1 sm:mb-2 text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
                  {slide.content.title}
                </h2>
                <p className="mb-4 sm:mb-8 font-mono text-sm sm:text-lg md:text-xl text-primary">
                  {slide.content.subtitle}
                </p>
                <div className="space-y-3 sm:space-y-4">
                  {slide.content.milestones.map(
                    (milestone: { label: string; date: string; status: string }, index: number) => (
                      <div
                        key={index}
                        className="rounded-lg sm:rounded-xl border-2 border-primary bg-primary/5 px-3 sm:px-6 py-3 sm:py-4"
                      >
                        <div className="flex items-center justify-center gap-2 sm:gap-3">
                          <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-primary animate-pulse" />
                          <p className="text-sm sm:text-lg md:text-xl font-semibold text-foreground">
                            {milestone.label}
                          </p>
                        </div>
                        <p className="mt-1 sm:mt-2 font-mono text-sm sm:text-base md:text-lg text-primary">
                          {milestone.date}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {slide.type === "nextsteps" && (
              <div className="w-full max-w-2xl">
                <h2 className="mb-1 sm:mb-2 text-center text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
                  {slide.content.title}
                </h2>
                <p className="mb-1 sm:mb-2 text-center font-mono text-sm sm:text-lg md:text-xl text-primary">
                  {slide.content.subtitle}
                </p>
                <p className="mb-3 sm:mb-6 text-center text-xs sm:text-sm text-muted-foreground">
                  {slide.content.description}
                </p>
                <div className="space-y-1.5 sm:space-y-2">
                  {slide.content.features.map(
                    (feature: { name: string; quarter: string }, index: number) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-lg bg-muted/50 px-2 sm:px-4 py-1.5 sm:py-2"
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 shrink-0 rounded-full bg-primary/50" />
                          <span className="text-xs sm:text-sm text-foreground">{feature.name}</span>
                        </div>
                        <span className="font-mono text-[10px] sm:text-xs text-muted-foreground">
                          {feature.quarter}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="absolute left-0 sm:-left-2 md:-left-6 top-1/2 -translate-y-1/2 rounded-full bg-card shadow-md hover:bg-muted h-8 w-8 sm:h-10 sm:w-10"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="absolute right-0 sm:-right-2 md:-right-6 top-1/2 -translate-y-1/2 rounded-full bg-card shadow-md hover:bg-muted h-8 w-8 sm:h-10 sm:w-10"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="sr-only">Next slide</span>
        </Button>

        {/* Slide Indicators */}
        <div className="mt-3 sm:mt-6 flex items-center justify-center gap-1.5 sm:gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all ${
                index === currentSlide ? "w-5 sm:w-8 bg-primary" : "w-1.5 sm:w-2 bg-primary/20 hover:bg-primary/40"
              }`}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </button>
          ))}
        </div>

        {/* Slide Counter */}
        <p className="mt-2 sm:mt-4 text-center font-mono text-xs sm:text-sm text-muted-foreground">
          {currentSlide + 1} / {slides.length}
        </p>
      </div>
    </div>
  )
}
