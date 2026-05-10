const tooltips = document.querySelectorAll('.has-tooltip');

tooltips.forEach((tooltip) => {
    tooltip.addEventListener('click', (event) => {
        event.preventDefault();

        let activeTooltip = document.querySelector('.tooltip');

        if (activeTooltip) {
            if (activeTooltip.previousElementSibling === tooltip) {
                activeTooltip.remove();
                return;
            }
            activeTooltip.remove();
        }

        const tooltipElement = document.createElement('div');

        tooltipElement.classList.add('tooltip');
        tooltipElement.classList.add('tooltip_active');

        tooltipElement.textContent = tooltip.title;

        document.body.appendChild(tooltipElement);

        const coords = tooltip.getBoundingClientRect();

        tooltipElement.style.left = `${coords.left}px`;
        tooltipElement.style.top = `${coords.bottom + 5}px`;
    });
});