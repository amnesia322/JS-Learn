let getPrice = function (time, isQuickly) {
    let rate = 1500;
    if (isQuickly) {
        rate *= 2.5;
        time /= 2;
    }
    if (time > 150) {
        rate -= 250;
    }
    return time * rate;
};

function getProfitableProject(time, profitUrgent) {
    let urgentValue = getPrice(time, true) - profitUrgent;
    let notUrgentValue = getPrice(time, false);
    let urgency = 'срочный';
    let expences = urgentValue;

    if (urgentValue > notUrgentValue) {
        urgency = 'обычный';
        expences = notUrgentValue;
    }

    return `Выгодней ${urgency} проект. Потратишь на него ${expences}`;
}

