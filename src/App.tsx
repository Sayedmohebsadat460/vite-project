import React, { useState } from 'react'
import Map from './assets/Map.png';
import ProfileImage from './assets/Profile.jpg';
import Facebook from './assets/icons-facebook.png';
import Dribbble from './assets/icons-dribbble.png';
import Instagram from './assets/icons-instagram.png';
import Linkedin from './assets/icons-linkedin.png';
import Twitter from './assets/icons-twitter.png';
import Youtube from './assets/icons-Youtube.png';
import ExIcon from './assets/icons.png';
import Download from './assets/frame.svg';
import Contrast from './assets/Contrast.png';
import Services from './assets/services.png';
import Blog from './assets/blog.png';
import Portfolio from './assets/Portfolio.png';
import Contact from './assets/Contact.png';
import CV from './assets/cv.png';
import Home from './assets/Home.png';
import IMG from './assets/Your Image 1.png';
import Coding from './assets/Coding.png';
import UI from './assets/illustration.png';
import Mic from './assets/Microphone.png';
import Game from './assets/game-development.png';
import Photographer from './assets/Photographer.png';
import MessageIMG from './assets/profile.png';
import Portfolio1 from './assets/image (1).png';
import Portfolio2 from './assets/image (2).png';
import Portfolio3 from './assets/image (3).png';
import Portfolio4 from './assets/image (4).png';
import Portfolio5 from './assets/image (5).png';
import Portfolio6 from './assets/image (6).png';
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Blog1 from './assets/image (7).png';
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Frame from './assets/Frame.png'
import Frame1 from './assets/Frame (1).png'
import Frame2 from './assets/Frame (2).png'
import Frame3 from './assets/Frame (3).png'
import { Check, ChevronsUpDown } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Checkbox } from "@/components/ui/checkbox"
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
const formSchema = z.object({
  username: z.string().min(2).max(50),
})
function App() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  const plans = [
    {
      name: 'Silver',
      price: '$0.00',
      features: [
        { feature: 'UI Design', available: true },
        { feature: 'Web Development', available: true },
        { feature: 'Logo Design', available: false },
        { feature: 'SEO Optimization', available: false },
        { feature: 'WordPress Integration', available: false },
        { feature: '5 Websites', available: false },
        { feature: 'Unlimited User', available: false },
        { feature: '20 GB Bandwidth', available: false },
      ],
    },
    {
      name: 'Gold',
      price: '$50.00',
      mostPopular: true,
      features: [
        { feature: 'UI Design', available: true },
        { feature: 'Web Development', available: true },
        { feature: 'Logo Design', available: true },
        { feature: 'SEO Optimization', available: true },
        { feature: 'WordPress Integration', available: false },
        { feature: '5 Websites', available: false },
        { feature: 'Unlimited User', available: false },
        { feature: '20 GB Bandwidth', available: false },
      ],
    },
    {
      name: 'Diamond',
      price: '$80.00',
      features: [
        { feature: 'UI Design', available: true },
        { feature: 'Web Development', available: true },
        { feature: 'Logo Design', available: true },
        { feature: 'SEO Optimization', available: true },
        { feature: 'WordPress Integration', available: true },
        { feature: '5 Websites', available: true },
        { feature: 'Unlimited User', available: true },
        { feature: '20 GB Bandwidth', available: true },
      ],
    },
  ];
  const testimonials = [
    {
      name: 'James Gouse',
      role: 'Graphic Designer',
      image: { MessageIMG },
      review: 'Lorem ipsum door sit amet, consectetur adipiscing elit. Vitae nulla diam in arcu cursus.',
    },
    {
      name: 'Tiana Philips',
      role: 'Photographer',
      image: { MessageIMG },
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in arcu cursus.',
    },
    {
      name: 'Talan Westervelt',
      role: 'Business Man',
      image: { MessageIMG },
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in arcu cursus.',
    },
  ];
  const educationList = [
    {
      school: 'University Of Toronto',
      certificate: 'Certificate Of Web Training',
      date: 'Jan 1999 - Dec 2001',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc.',
    },
    {
      school: 'Programming Course',
      certificate: 'Certificate Of Web Training',
      date: 'Jan 1999 - Dec 2001',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc.',
    },
    {
      school: 'Web Developer Courses',
      certificate: 'Certificate Of Web Training',
      date: 'Jan 1999 - Dec 2001',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc.',
    },
  ];
  const workHistory = [
    {
      school: 'Lead Web Designer',
      certificate: 'Certificate Of Web Training',
      date: 'Jan 1999 - Dec 2001',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc.',
    },
    {
      school: 'Junior Web Designer',
      certificate: 'Certificate Of Web Training',
      date: 'Jan 1999 - Dec 2001',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc.',
    },
    {
      school: 'Senior Web Designer',
      certificate: 'Certificate Of Web Training',
      date: 'Jan 1999 - Dec 2001',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc.',
    },
  ];
  const blogs = [
    {
      title: "How To Make Web Templates",
      description: "Learn how to make web templates...",
    },
    {
      title: "Make Business Card",
      description: "Make professional business cards...",
    },
    {
      title: "How To Make Flyer Design",
      description: "Design creative flyers easily...",
    },
  ];
  const frameworks = [
    {
      value: "next.js",
      code: '001',
      label: "Next.js",
    },
    {
      value: "sveltekit",
      code: '002',
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      code: '003',
      label: "Nuxt.js",
    },
    {
      value: "remix",
      code: '004',
      label: "Remix",
    },
    {
      value: "astro",
      code: '005',
      label: "Astro today ",
    },
  ]
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <div className='flex items-center justify-between font-suse  bg-gray-100'>


      {/* Left */}
      <div className="slide-left m-10 w-350 place-self-start  ">
        <Avatar>
          <AvatarImage src={ProfileImage} />
        </Avatar>
        <p className='font-bold '>Sayed Moheb Sadat</p>
        <h1 className='text-gray-400'>Front End Developer </h1>
        {/* media */}
        <div className="flex items-center">
          <img className='bg-[#FFB400F2] ml-2 rounded-full p-1' src={Facebook} alt="" />
          <img className='bg-[#FFB400F2] ml-2 rounded-full p-1' src={Dribbble} alt="" />
          <img className='bg-[#FFB400F2] ml-2 rounded-full p-1' src={Instagram} alt="" />
          <img className='bg-[#FFB400F2] ml-2 rounded-full p-1' src={Linkedin} alt="" />
          <img className='bg-[#FFB400F2] ml-2 rounded-full p-1' src={Twitter} alt="" />
          <img className='bg-[#FFB400F2] ml-2 rounded-full p-1' src={Youtube} alt="" />
        </div>
        {/* about */}
        <div className="space-y-1 w-185 mt-7">
          <div className="text-black font-bold ml-2">Age: <span className='ml-7.3rem'>14</span></div>
          <div className="text-black font-bold ml-2">Residence: <span className='ml-4.5rem' >BD</span> </div>
          <div className="text-black font-bold ml-2">Freelance: <span className='text-green-900 ml-2.0rem'>Available</span></div>
          <div className="text-black font-bold ml-2">Address: <span className='ml-8' >AFG, Herat</span></div>
        </div>
        <hr className='mt-7 h-0.5 bg-gray-200' />
        {/* languges */}
        <div className="space-y-4 mt-7">
          <div className="flex items-center justify-between text-gray-600 font-medium">
            <span>Persian</span>
            <span className="ml-4">100%</span>
          </div>
          <Progress value={100} className="h-1 bg-yellow-500 rounded-full" />
          <div className="flex items-center justify-between text-gray-600 font-medium">
            <span>English</span>
            <span className="ml-4">50%</span>
          </div>
          <Progress value={50} className="h-1 bg-yellow-500 rounded-full" />
        </div>
        <hr className='mt-7 h-0.5 bg-gray-200' />
        {/* code languges */}
        <div className="space-y-4 mt-10">
          <div className="flex items-center justify-between text-gray-600 font-medium">
            <span>HTML</span>
            <span className="ml-4">100%</span>
          </div>
          <Progress value={100} className="h-1 bg-yellow-500 rounded-full" />
          <div className="flex items-center justify-between text-gray-600 font-medium">
            <span>CSS</span>
            <span className="ml-4">95%</span>
          </div>
          <Progress value={95} className="h-1 bg-yellow-500 rounded-full" />
          <div className="flex items-center justify-between text-gray-600 font-medium">
            <span>JS</span>
            <span className="ml-4">80%</span>
          </div>
          <Progress value={80} className="h-1 bg-yellow-500 rounded-full" />
          <div className="flex items-center justify-between text-gray-600 font-medium">
            <span>React JS</span>
            <span className="ml-4">90%</span>
          </div>
          <Progress value={90} className="h-1 bg-yellow-500 rounded-full" />
          <div className="flex items-center justify-between text-gray-600 font-medium">
            <span>Responsive</span>
            <span className="ml-4">85%</span>
          </div>
          <Progress value={85} className="h-1 bg-yellow-500 rounded-full" />
        </div>
        <hr className='mt-7 h-0.5 bg-gray-200' />
        {/* ex skills */}
        <div>
          <h1 className='font-bold'>Extra Skills</h1>
          <div className='mt-4 flex'><img src={ExIcon} alt="" /><span className='ml-2'>Bootstrap, Materialize</span></div>
          <div className='mt-4 flex'><img src={ExIcon} alt="" /><span className='ml-2'>Stylus, Sass, Less</span></div>
          <div className='mt-4 flex'><img src={ExIcon} alt="" /><span className='ml-2'>Gulp, Webpack, Grunt</span></div>
          <div className='mt-4 flex'><img src={ExIcon} alt="" /><span className='ml-2'>GIT Knowledge</span></div>
        </div>
        <hr className='mt-7 h-0.5 bg-gray-200' />
        {/* cv button */}
        <Button className='bg-[#FFB400] flex mt-9 p-3 rounded-sm text-black'>DOWNLOAD CV <span className='ml-2'><img src={Download} alt="" /></span></Button>
      </div>
      {/* Main */}
      <main className='w-1000'>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className='p-4'>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className='p-4'>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className='p-4'>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className='p-4'>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* About */}
        <ResizablePanelGroup
          direction="horizontal"
          className="max-w-md rounded-lg border md:min-w-[450px]"
        >
          <ResizablePanel defaultSize={50}>
            <div className="flex h-[200px] items-center justify-center p-6">
              <span className="font-semibold">One</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Two</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={75}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Three</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
        <div className="flex items-center justify-between flex-start bottom-240">
          <div>
            <h1 className='text-5xl'>I’m Sayed Moheb Sadat <br />
              <span className='text-[#FFB400]'> Front-end</span> Developer </h1>
            <p className='mt-3 text-gray-700'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam numquam <br />
              eligendi praesentium ipsum labore.   Laboriosam, illum quibusdam  veniam <br />
              temporibus aperiam facilis aut iusto neque, incidunt sapiente .
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className='bg-[#FFB400F2] p-3 rounded-lg'>Hire Me</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Hire ME</DialogTitle>
                  <DialogDescription>
                    Write Your Information and send to Me.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="Message" className="text-right">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant="secondary">
                      SEND
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>

          </div>
          <img src={IMG} alt="" />
        </div>
        {/* Services */}
        <div className="service">
          <h1 className='text-3xl text-center'>my services</h1>
          <p className='text-center mt-2'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor <br />
            do amet sint. Velit officia consequat duis enim velit mollit. <br />
            lorem ipsum
          </p>
          <div className='flex justify-center gap-8 flex-wrap mt-4'>
            <div className='bg-white w-240 p-5 text-center rounded-lg w-16.5rem h-16.5rem'>
              <div className='flex justify-center'>
                <img src={Coding} alt="" />
              </div>
              <Popover>
                <PopoverTrigger>web development</PopoverTrigger>
                <PopoverContent>blog, e-commerce</PopoverContent>
              </Popover>
              <h1 className='text-2xl'></h1>
              <p className='text-gray-500'></p>
            </div>
            <div className='bg-white w-240 p-5 text-center rounded-lg w-16.5rem h-16.5rem'>
              <div className='flex justify-center'>
                <img src={UI} alt="" />
              </div>
              <h1 className='text-2xl'>uI/uX design</h1>
              <p className='text-gray-500'>Mobile app, website design</p>
            </div>
            <div className='bg-white w-240 p-5 text-center rounded-lg w-16.5rem h-16.5rem'>
              <div className='flex justify-center'>
                <img src={Mic} alt="" />
              </div>
              <h1 className='text-2xl'>sound design</h1>
              <p className='text-gray-500'>Voice Over, Beat Making</p>
            </div>
            <div className='bg-white w-240 p-5 text-center rounded-lg w-16.5rem h-16.5rem'>
              <div className='flex justify-center'>
                <img src={Game} alt="" />
              </div>
              <h1 className='text-2xl'>game design</h1>
              <p className='text-gray-500'>Character Design, Props & Objects</p>
            </div>
            <div className='bg-white w-240 p-5 text-center rounded-lg w-16.5rem h-16.5rem'>
              <div className='flex justify-center'>
                <img src={Photographer} alt="" />
              </div>
              <h1 className='text-2xl'>photography</h1>
              <p className='text-gray-500'>portrait, product photography</p>
            </div>
            <div className='bg-white w-240 p-5 text-center rounded-lg w-16.5rem h-16.5rem'>
              <p className='flex justify-center text-2xl'>
                Advertising
              </p>
              <h1 className=''>
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit. Vitae <br />
                nulla diam in ac dictum a urna <br />
                viverra morbi. </h1>
              <p className='text-[#FFB400] text-xs mt-3'>ORDER NOW</p>
            </div>
          </div>
        </div>
        {/* Plans */}
        <div className="plan text-center items-center mt-5">
          <h1 className='text-3xl '>Price plans</h1>
          <p className='text-gray-500'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br />
            Velit officia consequat duis enim <br />
            velit mollit. lorem ipsum
          </p>
          <div className="flex justify-center space-x-4 p-6 w-1013">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg p-6 w-80 ${plan.mostPopular ? 'border-4 border-yellow-500' : ''
                  }`}
              >
                {plan.mostPopular && (
                  <div className="text-center text-white bg-yellow-500 py-1 rounded-t-lg mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-center text-xl font-semibold">{plan.name}</h3>
                <p className="text-center text-2xl font-bold mt-2">{plan.price} <span className="text-sm font-medium">/hour</span></p>
                <p className="text-center text-gray-500 mt-1 mb-4">For Most Businesses That Want To Optimize Web Queries</p>
                <ul className="mb-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className={`flex justify-between py-1 ${feature.available ? '' : 'text-gray-400 line-through'}`}>
                      <span>{feature.feature}</span>
                      {feature.available ? <span>&#10003;</span> : <span>&#10005;</span>}
                    </li>
                  ))}
                </ul>
                <Drawer>
                  <DrawerTrigger className="w-full py-2 bg-yellow-500 text-white rounded-full mt-4 font-semibold">                  ORDER NOW
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Do You Wanna Order ? </DrawerTitle>
                      <DrawerDescription>Your Mony will not return</DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                      <Button>Submit</Button>
                      <DrawerClose>
                        <Button variant="outline">Cancel</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </div>
            ))}
          </div>
        </div>
        {/* messages */}

        <div className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900">Testimonials</h2>
              <p className="text-gray-600 mt-4">What our clients say</p>
            </div>
            <div className="flex justify-center gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
                  <div className="text-yellow-500 mb-2">
                    <span>★★★★★</span>
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.review}</p>
                  <div className="flex items-center justify-center space-x-4">
                    <img className="w-12 h-12 rounded-full" src={MessageIMG} alt={testimonial.name} />
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <span className="h-2 w-2 bg-yellow-500 rounded-full"></span>
              <span className="h-2 w-2 bg-gray-400 rounded-full ml-2"></span>
              <span className="h-2 w-2 bg-gray-400 rounded-full ml-2"></span>
            </div>
          </div>
        </div>
        {/* Education */}
        <div className="">
          <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900">Education</h2>
                <p className="text-gray-600 mt-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor.</p>
              </div>
              <div className="space-y-6">
                {educationList.map((education, index) => (
                  <div key={index} className="rounded-lg  p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-gray-900">{education.school}</h3>
                        <p className="text-gray-600">{education.certificate}</p>
                      </div>
                      <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">
                        <Sheet>
                          <SheetTrigger>                        {education.date}
                          </SheetTrigger>
                          <SheetContent>
                            <SheetHeader>
                              <SheetTitle>Hi </SheetTitle>
                              <SheetDescription>
                                My Education is not very Great but it is good
                                it is a sheet
                              </SheetDescription>
                            </SheetHeader>
                          </SheetContent>
                        </Sheet>

                      </div>
                    </div>
                    <p className="text-gray-600 mt-4">{education.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Work */}
        <div className="">
          <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900">WorkHistory </h2>
                <p className="text-gray-600 mt-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor.</p>
              </div>
              <div className="space-y-6">
                {workHistory.map((workHistory, index) => (
                  <div key={index} className="rounded-lg  p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-gray-900">{workHistory.school}</h3>
                        <p className="text-gray-600">{workHistory.certificate}</p>
                      </div>
                      <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">
                        {workHistory.date}
                      </div>
                    </div>
                    <p className="text-gray-600 mt-4">{workHistory.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Blog */}
        <div className="blog">
          <div className="py-16 bg-gray-100">
            <h2 className="text-center text-4xl mb-8 font-semibold">Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
              {blogs.map((blog, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src={Blog1} alt={blog.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-4">{blog.title}</h3>
                    <p className="text-gray-700 mb-4">{blog.description}</p>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button className="text-yellow-500 font-semibold" variant="outline"> Learn More →</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are You Sure to wanna see the blog ?
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>No</AlertDialogCancel>
                          <AlertDialogAction>Yes</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Contact */}
        <div className="contact">
          <div className="bg-white py-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
              {/* Contact Form */}
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input placeholder="Address" {...field} />
                        </FormControl><FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="youremail@gmail.com" {...field} />
                        </FormControl><FormLabel><HoverCard><HoverCardTrigger>Phone Number</HoverCardTrigger><HoverCardContent>Your number should to be more that 9 and less than 11</HoverCardContent></HoverCard></FormLabel>
                        <FormControl>
                          <Input placeholder="00 123456789" {...field} />
                        </FormControl>
                        <FormMessage />
                        <Textarea placeholder='Your Message' />
                        Choose Your FrameWork to use <br />
                        <Popover open={open} onOpenChange={setOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              role="combobox"
                              aria-expanded={open}
                              className="w-[200px] justify-between"
                            >
                              {value
                                ? frameworks.find((framework) => framework.value === value)?.code
                                : "Select framework..."}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-[200px] p-0">
                            <Command>
                              <CommandInput placeholder="Search framework..." />
                              <CommandList>
                                <CommandEmpty>No framework found.</CommandEmpty>
                                <CommandGroup>
                                  {frameworks.map((framework) => (
                                    <CommandItem
                                      key={framework.value}
                                      value={framework.value}
                                      onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue);
                                        setOpen(false);
                                      }}
                                    >
                                      <Check
                                        className={cn(
                                          "mr-2 h-4 w-4",
                                          value === framework.value ? "opacity-100" : "opacity-0"
                                        )}
                                      />
                                      {framework.label}
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              </CommandList>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </FormItem>
                    )}
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms">Accept terms and conditions</Label>
                    </div>
                  </div>
                  <Button type="submit">Submit</Button>
                </form>
              </Form>

              {/* Contact Information */}
              <div className='bg-gray-100 p-4 rounded-sm'>
                <h2 className="text-2xl font-semibold mb-8">Contact Information</h2>
                <Accordion collapsible type='single' className="w-full space-y-4">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>                  Information About Country
                    </AccordionTrigger>
                    <AccordionContent>
                      <li>
                        <span className="font-semibold">Country:</span> Bangladesh
                      </li>
                      <li>
                        <span className="font-semibold">City:</span> Dhaka
                      </li>
                      <li>
                        <span className="font-semibold">Street:</span> 35 Wardan, Badda
                      </li>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>                                  Information About Emails
                    </AccordionTrigger>
                    <AccordionContent>
                      <li>
                        <span className="font-semibold">Email:</span> yourname@gmail.com
                      </li>
                      <li>
                        <span className="font-semibold">Skype:</span> @yourskypename
                      </li>
                      <li>
                        <span className="font-semibold">Telegram:</span> @yourtelegram
                      </li>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>                                    Information About Numbers
                    </AccordionTrigger>
                    <AccordionContent>
                      <li>
                        <span className="font-semibold">Support Services:</span> 15368
                      </li>
                      <li>
                        <span className="font-semibold">Phone:</span> +88 021356 987 25
                      </li>
                      <li>
                        <span className="font-semibold">Fax:</span> +88 021356 987 35
                      </li>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div>
          <img src={Map} alt="" />

          <div className='m-10 flex items-center justify-between'>
            <img src={Frame} alt="" />
            <img src={Frame1} alt="" />
            <img src={Frame2} alt="" />
            <img src={Frame3} alt="" />
          </div>
          <footer className='bg-white text-center p-5'>
            2021 All Rights Reserved.Ojjomedia
          </footer>
        </div>

      </main>
      {/* Right */}
      <div className="flex flex-col items-center mt-16 space-y-4 w-70">
        {/* Light/Dark Mode Toggle */}
        <img className="relative bottom-28.5rem mr-40" src={Contrast} alt="Light/Dark Toggle" />

        {/* Icons with Tooltip */}
        <div style={{ marginBottom: '4225px' }} className=' relative bottom-23 w-70'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <img className="bg-[#FFB400] rounded-full p-3 relative bottom-240" src={Home} alt="Home" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Home</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <img className="bg-gray-200 rounded-full p-3 relative bottom-240" src={Services} alt="Services" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Services</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <img className="bg-gray-200 rounded-full p-3 relative bottom-240" src={Blog} alt="Blog" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Blog</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <img className="bg-gray-200 rounded-full p-3 relative bottom-240" src={Portfolio} alt="Portfolio" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Portfolio</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <img className="bg-gray-200 rounded-full p-3 relative bottom-240" src={Contact} alt="Contact" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Contact</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <img className="bg-gray-200 rounded-full p-3 relative bottom-240" src={CV} alt="CV" />
              </TooltipTrigger>
              <TooltipContent>
                <p>CV</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

        </div>
      </div>

    </div>
  )
}
export default App;        