"use client";

import * as React from "react";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "cmdk";
import { useEffect, useState } from "react";
import { Laptop, Moon, Sun, Mail, FileText } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { DATA } from "@/data";
import { useTheme } from "next-themes";
import { DialogTitle } from "@radix-ui/react-dialog";

export function CommandMenu() {
    const [open, setOpen] = useState(false);
    const { setTheme } = useTheme();

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };
        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false);
        command();
    }, []);

    return (
        <>
            <p className="fixed bottom-0 left-0 right-0 hidden border-t border-t-muted bg-background p-2 text-center text-sm text-muted-foreground md:block z-40">
                Press{" "}
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    <span className="text-xs">⌘</span>K
                </kbd>{" "}
                to open the command menu
            </p>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <DialogTitle className="sr-only">Command Menu</DialogTitle>
                <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-black/50 backdrop-blur-sm">
                    <div className="w-full max-w-[450px] bg-background border border-border rounded-xl shadow-2xl overflow-hidden p-0 animate-in fade-in zoom-in-95 duration-200">
                        <CommandInput
                            placeholder="Type a command or search..."
                            className="w-full px-4 py-3 border-b border-border bg-transparent outline-none text-sm placeholder:text-muted-foreground"
                        />
                        <CommandList className="max-h-[300px] overflow-y-auto p-2">
                            <CommandEmpty className="py-6 text-center text-sm text-muted-foreground">No results found.</CommandEmpty>
                            <CommandGroup heading="Actions">
                                <CommandItem onSelect={() => runCommand(() => window.print())} className="flex items-center gap-2 px-2 py-1.5 rounded-sm hover:bg-muted text-sm cursor-pointer aria-selected:bg-muted">
                                    <Laptop className="w-4 h-4 mr-2" />
                                    <span>Print Resume</span>
                                </CommandItem>
                                <CommandItem onSelect={() => runCommand(() => window.open(`mailto:${DATA.email}`))} className="flex items-center gap-2 px-2 py-1.5 rounded-sm hover:bg-muted text-sm cursor-pointer aria-selected:bg-muted">
                                    <Mail className="w-4 h-4 mr-2" />
                                    <span>Send Email</span>
                                </CommandItem>
                            </CommandGroup>
                            <CommandSeparator className="h-px bg-border my-2" />
                            <CommandGroup heading="Links">
                                <CommandItem onSelect={() => runCommand(() => window.open(DATA.github, "_blank"))} className="flex items-center gap-2 px-2 py-1.5 rounded-sm hover:bg-muted text-sm cursor-pointer aria-selected:bg-muted">
                                    <SiGithub className="w-4 h-4 mr-2" />
                                    <span>GitHub</span>
                                </CommandItem>
                                <CommandItem onSelect={() => runCommand(() => window.open(DATA.linkedin, "_blank"))} className="flex items-center gap-2 px-2 py-1.5 rounded-sm hover:bg-muted text-sm cursor-pointer aria-selected:bg-muted">
                                    <SiLinkedin className="w-4 h-4 mr-2" />
                                    <span>LinkedIn</span>
                                </CommandItem>
                                <CommandItem onSelect={() => runCommand(() => window.open(DATA.resumeUrl, "_blank"))} className="flex items-center gap-2 px-2 py-1.5 rounded-sm hover:bg-muted text-sm cursor-pointer aria-selected:bg-muted">
                                    <FileText className="w-4 h-4 mr-2" />
                                    <span>View Resume</span>
                                </CommandItem>
                            </CommandGroup>
                            <CommandSeparator className="h-px bg-border my-2" />
                            <CommandGroup heading="Theme">
                                <CommandItem onSelect={() => runCommand(() => setTheme("light"))} className="flex items-center gap-2 px-2 py-1.5 rounded-sm hover:bg-muted text-sm cursor-pointer aria-selected:bg-muted">
                                    <Sun className="w-4 h-4 mr-2" />
                                    <span>Light Mode</span>
                                </CommandItem>
                                <CommandItem onSelect={() => runCommand(() => setTheme("dark"))} className="flex items-center gap-2 px-2 py-1.5 rounded-sm hover:bg-muted text-sm cursor-pointer aria-selected:bg-muted">
                                    <Moon className="w-4 h-4 mr-2" />
                                    <span>Dark Mode</span>
                                </CommandItem>
                                <CommandItem onSelect={() => runCommand(() => setTheme("system"))} className="flex items-center gap-2 px-2 py-1.5 rounded-sm hover:bg-muted text-sm cursor-pointer aria-selected:bg-muted">
                                    <Laptop className="w-4 h-4 mr-2" />
                                    <span>System</span>
                                </CommandItem>
                            </CommandGroup>
                        </CommandList>
                    </div>
                </div>
            </CommandDialog>
        </>
    );
}
