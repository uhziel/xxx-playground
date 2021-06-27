analyze <- function(filename) {
    dat <- read.csv(file = filename, header = FALSE)
    avg_day_inflamation <- apply(dat, 2, mean)
    min_day_inflamation <- apply(dat, 2, min)
    max_day_inflamation <- apply(dat, 2, max)

    plot(avg_day_inflamation)
    plot(min_day_inflamation)
    plot(max_day_inflamation)
}

filenames <- list.files(path= "data", pattern="inflammation", full.names=TRUE)
for (f in filenames) {
    print(f)
    analyze(f)
}
