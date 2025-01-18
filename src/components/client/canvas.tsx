'use client';

import { Eraser } from '@phosphor-icons/react';
import { useEffect, useRef } from 'react';

export function Canvas() {
    // const [isDrawing, setIsDrawing] = useState(false);

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(
        () => {
            // define the resize function, which uses the re
            const resize = () => {
                const canvas = canvasRef.current;
                if (canvas) {
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight * 7.5;
                }
            };
            // call resize() once.
            resize();
            // attach event listeners.
            window.addEventListener('resize', resize);
            // remove listeners on unmount.
            return () => {
                window.removeEventListener('resize', resize);
            };
        },
        [] // no dependencies means that it will be called once on mount.
    );

    return (
        <>
            <canvas
                className="absolute z-[0] hidden lg:block"
                ref={canvasRef}
                // onMouseDown={(e) => {
                // 	// know that we are drawing, for future mouse movements.
                // 	// setIsDrawing(true);
                // 	const context = e.currentTarget.getContext('2d');
                // 	// begin path.
                // 	if (context) {
                // 		context.beginPath();
                // 		context.lineWidth = 3;
                // 		context.lineCap = 'round';
                // 		context.strokeStyle = '#0d0907';
                // 		context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
                // 	}
                // }}
                onMouseMove={(e) => {
                    // only handle mouse moves when the mouse is already down.
                    // if (isDrawing) {
                    const context = e.currentTarget.getContext('2d');
                    if (context) {
                        context.lineWidth = 1;
                        context.lineCap = 'round';
                        context.lineJoin = 'round';
                        context.strokeStyle = '#0d0907';
                        context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
                        context.stroke();
                    }
                    // }
                }}
                // onTouchStart={(e) => {
                //     // only handle mouse moves when the mouse is already down.
                //     // if (isDrawing) {
                //     const context = e.currentTarget.getContext('2d');
                //     if (context) {
                //         context.lineWidth = 1;
                //         context.lineCap = 'round';
                //         context.lineJoin = 'round';
                //         context.strokeStyle = '#0d0907';
                //         context.lineTo(e.nativeEvent.touches[0].clientX, e.nativeEvent.touches[0].clientY);
                //         context.stroke();
                //     }
                //     // }
                // }}
                // onMouseUp={() => {
                // 	// end drawing.
                // 	setIsDrawing(false);
                // }}
            />
            <button className="fixed left-8 z-[2] hidden cursor-pointer rounded-full border-2 border-black bg-slate-900 p-4 text-white duration-200 hover:scale-105 hover:bg-yb3 hover:text-black lg:block">
                <Eraser
                    size={28}
                    onClick={() => {
                        const canvas = canvasRef.current;
                        const context = canvas?.getContext('2d');
                        if (context && canvas) {
                            context.clearRect(0, 0, canvas.width, canvas.height);
                            context.beginPath();
                        }
                    }}
                />
            </button>
        </>
    );
}
