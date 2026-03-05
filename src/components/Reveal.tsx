"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface Props {
    children: ReactNode;
    width?: "fit-content" | "100%";
}

export default function Reveal({ children, width = "100%" }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ width }}
        >
            {children}
        </motion.div>
    )
}