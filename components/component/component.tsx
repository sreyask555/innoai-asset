// /**
// * This code was generated by v0 by Vercel.
// * @see https://v0.dev/t/r2hYZTEsTan
// * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
// */

// /** Add fonts into your Next.js project:

// import { Inter } from 'next/font/google'

// inter({
//   subsets: ['latin'],
//   display: 'swap',
// })

// To read more about using these font, please visit the Next.js documentation:
// - App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
// - Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
// **/
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
// import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

// export function Component() {
//   return (
//     <div className="flex flex-col min-h-screen bg-muted/40">
//       <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
//         <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
//           <LayoutGridIcon className="w-6 h-6" />
//           <span className="sr-only">Acme Project Management</span>
//         </Link>
//         <nav className="hidden font-medium sm:flex flex-row items-center gap-6 text-sm">
//           <Link href="#" className="font-bold" prefetch={false}>
//             Dashboard
//           </Link>
//           <Link href="#" className="text-muted-foreground" prefetch={false}>
//             Projects
//           </Link>
//           <Link href="#" className="text-muted-foreground" prefetch={false}>
//             Tasks
//           </Link>
//           <Link href="#" className="text-muted-foreground" prefetch={false}>
//             Team
//           </Link>
//           <Link href="#" className="text-muted-foreground" prefetch={false}>
//             Reports
//           </Link>
//           <Link href="#" className="text-muted-foreground" prefetch={false}>
//             Settings
//           </Link>
//         </nav>
//         <div className="ml-auto flex items-center gap-4">
//           <Button variant="ghost" size="icon" className="rounded-full">
//             <SignalIcon className="w-5 h-5" />
//             <span className="sr-only">Notifications</span>
//           </Button>
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" size="icon" className="rounded-full">
//                 <img
//                   src="/placeholder.svg"
//                   width="36"
//                   height="36"
//                   className="rounded-full"
//                   alt="Avatar"
//                   style={{ aspectRatio: "36/36", objectFit: "cover" }}
//                 />
//                 <span className="sr-only">Toggle user menu</span>
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuLabel>Logged in as John Doe</DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>Profile</DropdownMenuItem>
//               <DropdownMenuItem>Settings</DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>Logout</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </header>
//       <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:p-6">
//         <Card>
//           <CardHeader>
//             <CardTitle>Active Projects</CardTitle>
//             <CardDescription>View and manage your active projects.</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="grid gap-2">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <BriefcaseIcon className="w-5 h-5" />
//                   <span className="font-medium">Project A</span>
//                 </div>
//                 <Badge variant="secondary">In Progress</Badge>
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <BriefcaseIcon className="w-5 h-5" />
//                   <span className="font-medium">Project B</span>
//                 </div>
//                 <Badge variant="secondary">In Progress</Badge>
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <BriefcaseIcon className="w-5 h-5" />
//                   <span className="font-medium">Project C</span>
//                 </div>
//                 <Badge variant="success">Completed</Badge>
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <BriefcaseIcon className="w-5 h-5" />
//                   <span className="font-medium">Project D</span>
//                 </div>
//                 <Badge variant="danger">Overdue</Badge>
//               </div>
//             </div>
//           </CardContent>
//           <CardFooter>
//             <Link href="#" className="font-medium" prefetch={false}>
//               View All Projects
//             </Link>
//           </CardFooter>
//         </Card>
//         <Card>
//           <CardHeader>
//             <CardTitle>Task Status</CardTitle>
//             <CardDescription>Overview of your team's task progress.</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="grid gap-4">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <CircleCheckIcon className="w-5 h-5 text-green-500" />
//                   <span>Completed</span>
//                 </div>
//                 <span className="font-medium">72</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <ClockIcon className="w-5 h-5 text-yellow-500" />
//                   <span>In Progress</span>
//                 </div>
//                 <span className="font-medium">28</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <CircleXIcon className="w-5 h-5 text-red-500" />
//                   <span>Overdue</span>
//                 </div>
//                 <span className="font-medium">12</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <CirclePlusIcon className="w-5 h-5 text-blue-500" />
//                   <span>New</span>
//                 </div>
//                 <span className="font-medium">42</span>
//               </div>
//             </div>
//           </CardContent>
//           <CardFooter>
//             <Link href="#" className="font-medium" prefetch={false}>
//               View All Tasks
//             </Link>
//           </CardFooter>
//         </Card>
//         <Card>
//           <CardHeader>
//             <CardTitle>Key Metrics</CardTitle>
//             <CardDescription>Important performance indicators for your projects.</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="grid gap-4">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <UsersIcon className="w-5 h-5" />
//                   <span>Team Members</span>
//                 </div>
//                 <span className="font-medium">24</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <BriefcaseIcon className="w-5 h-5" />
//                   <span>Active Projects</span>
//                 </div>
//                 <span className="font-medium">8</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <SquareCheckIcon className="w-5 h-5" />
//                   <span>Completed Tasks</span>
//                 </div>
//                 <span className="font-medium">312</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <CalendarIcon className="w-5 h-5" />
//                   <span>Overdue Tasks</span>
//                 </div>
//                 <span className="font-medium">24</span>
//               </div>
//             </div>
//           </CardContent>
//           <CardFooter>
//             <Link href="#" className="font-medium" prefetch={false}>
//               View Reports
//             </Link>
//           </CardFooter>
//         </Card>
//         <Card className="md:col-span-2 lg:col-span-3">
//           <CardHeader>
//             <CardTitle>Recent Activity</CardTitle>
//             <CardDescription>Stay up-to-date with the latest project and task updates.</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Project</TableHead>
//                   <TableHead>Task</TableHead>
//                   <TableHead>Assignee</TableHead>
//                   <TableHead>Status</TableHead>
//                   <TableHead>Due Date</TableHead>
//                   <TableHead>Actions</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 <TableRow>
//                   <TableCell>
//                     <div className="flex items-center gap-2">
//                       <BriefcaseIcon className="w-5 h-5" />
//                       <span className="font-medium">Project A</span>
//                     </div>
//                   </TableCell>
//                   <TableCell>
//                     <div className="flex items-center gap-2">
//                       <SquareCheckIcon className="w-5 h-5" />
//                       <span>Implement new feature</span>
//                     </div>
//                   </TableCell>
//                   <TableCell>
//                     <div className="flex items-center gap-2">
//                       <Avatar className="w-6 h-6">
//                         <AvatarImage src="/placeholder-user.jpg" alt="@username" />
//                         <AvatarFallback>JD</AvatarFallback>
//                       </Avatar>
//                       <span>John Doe</span>
//                     </div>
//                   </TableCell>
//                   <TableCell>
//                     <Badge variant="secondary">In Progress</Badge>
//                   </TableCell>
//                   <TableCell>2023-06-30</TableCell>
//                   <TableCell>
//                     <DropdownMenu>
//                       <DropdownMenuTrigger asChild>
//                         <Button variant="ghost" size="icon">
//                           <MoveHorizontalIcon className="w-5 h-5" />
//                           <span className="sr-only">Task actions</span>
//                         </Button>
//                       </DropdownMenuTrigger>
//                       <DropdownMenuContent align="end">
//                         <DropdownMenuItem>Edit</DropdownMenuItem>
//                         <DropdownMenuItem>Assign</DropdownMenuItem>
//                         <DropdownMenuItem>Mark as Complete</DropdownMenuItem>
//                         <DropdownMenuItem>Delete</DropdownMenuItem>
//                       </DropdownMenuContent>
//                     </DropdownMenu>
//                   </TableCell>
//                 </TableRow>
//                 <TableRow>
//                   <TableCell>
//                     <div className="flex items-center gap-2">
//                       <BriefcaseIcon className="w-5 h-5" />
//                       <span className="font-medium">Project B</span>
//                     </div>
//                   </TableCell>
//                   <TableCell>
//                     <div className="flex items-center gap-2">
//                       <SquareCheckIcon className="w-5 h-5" />
//                       <span>Fix bug in login flow</span>
//                     </div>
//                   </TableCell>
//                   <TableCell>
//                     <div className="flex items-center gap-2">
//                       <Avatar className="w-6 h-6">
//                         <AvatarImage src="/placeholder-user.jpg" alt="@username" />
//                         <AvatarFallback>JD</AvatarFallback>
//                       </Avatar>
//                       <span>Jane Doe</span>
//                     </div>
//                   </TableCell>
//                   <TableCell>
//                     <Badge variant="success">Completed</Badge>
//                   </TableCell>
//                   <TableCell>2023-05-15</TableCell>
//                   <TableCell>
//                     <DropdownMenu>
//                       <DropdownMenuTrigger asChild>
//                         <Button variant="ghost" size="icon">
//                           <MoveHorizontalIcon className="w-5 h-5" />
//                           <span className="sr-only">Task actions</span>
//                         </Button>
//                       </DropdownMenuTrigger>
//                       <DropdownMenuContent align="end">
//                         <DropdownMenuItem>Edit</DropdownMenuItem>
//                         <DropdownMenuItem>Assign</DropdownMenuItem>
//                         <DropdownMenuItem>Mark as Complete</DropdownMenuItem>
//                         <DropdownMenuItem>Delete</DropdownMenuItem>
//                       </DropdownMenuContent>
//                     </DropdownMenu>
//                   </TableCell>
//                 </TableRow>
//                 <TableRow>
//                   <TableCell>
//                     <div className="flex items-center gap-2">
//                       <BriefcaseIcon className="w-5 h-5" />
//                       <span className="font-medium">Project C</span>
//                     </div>
//                   </TableCell>
//                   <TableCell>
//                     <div className="flex items-center gap-2">
//                       <SquareCheckIcon className="w-5 h-5" />
//                       <span>Optimize database queries</span>
//                     </div>
//                   </TableCell>
//                   <TableCell>
//                     <div className="flex items-center gap-2">
//                       <Avatar className="w-6 h-6">
//                         <AvatarImage src="/placeholder-user.jpg" alt="@username" />
//                         <AvatarFallback>JD</AvatarFallback>
//                       </Avatar>
//                       <span>Bob Smith</span>
//                     </div>
//                   </TableCell>
//                   <TableCell>
//                     <Badge variant="danger">Overdue</Badge>
//                   </TableCell>
//                   <TableCell>2023-04-30</TableCell>
//                   <TableCell>
//                     <DropdownMenu>
//                       <DropdownMenuTrigger asChild>
//                         <Button variant="ghost" size="icon">
//                           <MoveHorizontalIcon className="w-5 h-5" />
//                           <span className="sr-only">Task actions</span>
//                         </Button>
//                       </DropdownMenuTrigger>
//                       <DropdownMenuContent align="end">
//                         <DropdownMenuItem>Edit</DropdownMenuItem>
//                         <DropdownMenuItem>Assign</DropdownMenuItem>
//                         <DropdownMenuItem>Mark as Complete</DropdownMenuItem>
//                         <DropdownMenuItem>Delete</DropdownMenuItem>
//                       </DropdownMenuContent>
//                     </DropdownMenu>
//                   </TableCell>
//                 </TableRow>
//               </TableBody>
//             </Table>
//           </CardContent>
//         </Card>
//       </main>
//     </div>
//   )
// }

// function BriefcaseIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
//       <rect width="20" height="14" x="2" y="6" rx="2" />
//     </svg>
//   )
// }


// function CalendarIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M8 2v4" />
//       <path d="M16 2v4" />
//       <rect width="18" height="18" x="3" y="4" rx="2" />
//       <path d="M3 10h18" />
//     </svg>
//   )
// }


// function CircleCheckIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <path d="m9 12 2 2 4-4" />
//     </svg>
//   )
// }


// function CirclePlusIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <path d="M8 12h8" />
//       <path d="M12 8v8" />
//     </svg>
//   )
// }


// function CircleXIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <path d="m15 9-6 6" />
//       <path d="m9 9 6 6" />
//     </svg>
//   )
// }


// function ClockIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <polyline points="12 6 12 12 16 14" />
//     </svg>
//   )
// }


// function LayoutGridIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="7" height="7" x="3" y="3" rx="1" />
//       <rect width="7" height="7" x="14" y="3" rx="1" />
//       <rect width="7" height="7" x="14" y="14" rx="1" />
//       <rect width="7" height="7" x="3" y="14" rx="1" />
//     </svg>
//   )
// }


// function MoveHorizontalIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polyline points="18 8 22 12 18 16" />
//       <polyline points="6 8 2 12 6 16" />
//       <line x1="2" x2="22" y1="12" y2="12" />
//     </svg>
//   )
// }


// function SignalIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M2 20h.01" />
//       <path d="M7 20v-4" />
//       <path d="M12 20v-8" />
//       <path d="M17 20V8" />
//       <path d="M22 4v16" />
//     </svg>
//   )
// }


// function SquareCheckIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="18" height="18" x="3" y="3" rx="2" />
//       <path d="m9 12 2 2 4-4" />
//     </svg>
//   )
// }


// function UsersIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//       <circle cx="9" cy="7" r="4" />
//       <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//       <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//     </svg>
//   )
// }
